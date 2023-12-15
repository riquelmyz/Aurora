// import's module's
import 'dotenv/config';

import { fastify } from 'fastify';
import Database from './src/database/postgres.js';

// class's module's
export default class Aurora {
    constructor () {
        this.server = fastify ();
        this.database = new Database ();

        this.init ();

        return this;
    };

    async init () {
        try {
            this.server.listen ({
                host: '0.0.0.0',
                port: 3333,
            }, () => {
                return console.log (`[AURORA] Servidor rodando na porta: 3333`);
            });

            this.server.get ('/accounts', async (request) => {
                const data = request.query;

                if (data.user || data.email) {
                    return this.database.getAccount (data.user, data.email);
                }

                return this.database.getAccounts ();
            });

            this.server.post ('/accounts', async (require, response) => {
                const data = require.body;

                if (await this.database.createAccount (data)) {
                    console.log (`[AURORA]: Nova conta criada: ${data.account} / ${data.email}.`);

                    return response.status (201).send ();
                };

                return response.status (404).send ();
            });

            this.server.get ('/profile', async (request) => {
                const data = request.query;

                if (data.user) {
                    return this.database.getProfile (data.user);
                }

                return this.database.getProfiles ();
            });

            this.server.post ('/profile', async (require, response) => {
                const data = require.body;

                if (await this.database.createProfile (data)) {
                    console.log (`[AURORA]: Novo perfil criado: ${data.account} / ${data.profile.name}.`);

                    return response.status (201).send ();
                };

                return response.status (404).send ();
            });

            this.server.post ('/authenticate', async (require, response) => {
                const data = require.body;

                if (await this.database.authenticateAccount (data)) {
                    console.log (`[AURORA]: Nova autenticação feita: ${data.account} / ${data.email}.`);

                    return response.status (201).send ();
                };

                return response.status (404).send ();
            });
        } catch (error) {
            return console.log (`[ERROR]: ${error}`);
        };

        return true;
    };
};

// init's module's
new Aurora ();