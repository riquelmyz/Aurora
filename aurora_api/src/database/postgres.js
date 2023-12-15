// import's module's
import sha256 from 'sha256';
import database from './database.js';

import { v4 as uuidv4 } from 'uuid';

// export's module's
export default class Database {
    async getAccount (account, email) {
        return await database`SELECT * FROM accounts WHERE account = ${account || ''} OR email = ${email || ''};`;
    };

    async getAccounts () {
        return await database`SELECT * FROM accounts;`;
    };

    async createAccount (data) {
        const auth = uuidv4 ();
        const password = sha256 (data.password);

        await database`INSERT INTO accounts (account, email, password, auth) VALUES (${data.account}, ${data.email}, ${password}, ${auth});`;

        return true;
    };

    async authenticateAccount (data) {
        const result = await this.getAccount (data.account, data.email);

        if (result.length < 1) {
            return false;
        }

        const password = sha256 (data.password);

        if (result[0].password != password) {
            return false;
        }

        if ((await this.getProfile (data.account)).length > 0) {
            return true;
        }

        await this.createProfile (data.account, data.profile);

        return true;
    };

    async getProfile (account) {
        return await database`SELECT * FROM profile WHERE account = ${account || ''};`;
    };

    async getProfiles () {
        return await database`SELECT * FROM profile;`;
    };

    async createProfile (account, data) {
        if ((await this.getAccount (account)).length < 1) {
            return false;
        }

        await database`INSERT INTO profile (account, data) VALUES (${account}, ${data});`;

        return true;
    };
};
