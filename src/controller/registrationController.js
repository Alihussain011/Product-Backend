const client = require("../db/db");
const get = async (req, res) => {
    try {
        let result = await client.query("SELECT * FROM product_schema.user");
        res.status(200).send(result);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
const post = async (req, res) => {
    let { username, email, password } = req.body;
    if (!username || !password) return res.status(400).send("Please provide all require fields");

    if (!email) email = "";
    try {
        let result = await client.query("INSERT INTO product_schema.user (username,email,password) values ($1,$2,$3)", [username, email, password]);
        res.status(200).send(result);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
module.exports = { get, post }