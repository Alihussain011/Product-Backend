const client = require("../db/db");

const getAllUser = async () =>{
    try {
        return await client.query("SELECT * FROM product_schema.user");
    } catch (error) {
        return {
            error
        };
    }
}

const insertUserData = async ({username,email,password})=>{
    try {
        return await client.query("INSERT INTO product_schema.user (username,email,password) values ($1,$2,$3)", [username, email, password]);
    } catch (error) {
        return {error};
    }
}

module.exports = {getAllUser,insertUserData};