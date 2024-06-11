const connection = "";
const { Client } = require("pg");
const client = new Client({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'product',
});
(async function () {
    await client.connect();
})();
module.exports = client;