const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ad_user",
    password: "mradhakal",
    host: "localhost",
    port: 5432,
    database: "todo-pern"
});

module.exports = pool;