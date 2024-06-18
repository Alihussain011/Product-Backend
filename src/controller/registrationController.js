const client = require("../db/db");
const { getAllUser, insertUserData } = require("../modal/registrationModel");

const get = async (req, res) => {
    let result = await getAllUser();
    if(result.error) return res.status(500).send("sql error");

    res.status(200).send(result);
}
const post = async (req, res) => {
    let { username, email, password } = req.body;
    if (!username || !password) return res.status(400).send("Please provide all require fields");

    if (!email) email = "";
    
    let result = await insertUserData({username,email,password});
    if(result.error) return res.status(500).send("sql error");

    res.status(200).send(result);
}
module.exports = { get, post }