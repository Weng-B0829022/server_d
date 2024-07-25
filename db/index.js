const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: '163.25.111.55',
    database: 'TypingMaster',
    password: '5471',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
