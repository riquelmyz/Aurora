// import's module's
import postgres from 'postgres';

// define's module's
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const database = postgres ({
    ssl: 'require',
    port: 5432,

    host: PGHOST,
    database: PGDATABASE,

    username: PGUSER,
    password: PGPASSWORD,
    
    connection: {
        options: `project=${ENDPOINT_ID}`,
    },
});

// export's module's
export default database;