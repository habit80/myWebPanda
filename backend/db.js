const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'database', // Docker Compose에서 정의한 서비스 이름
    database: 'chainmonitor',
    password: 'postgres',
    port: 5432
});

module.exports = pool;

