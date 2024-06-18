const client = require("../db/db");
const getPasswordOfUserName = async (username)=>{
    try {
        return await client.query("select password from product_schema.user where username = $1", [username]);
    } catch (error) {
        return {error};
    }
}
module.exports =  {getPasswordOfUserName};