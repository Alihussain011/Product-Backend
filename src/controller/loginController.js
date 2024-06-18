const client = require("../db/db");
const jwt = require("jsonwebtoken");
const {getPasswordOfUserName} = require("../modal/loginModel");

const get = (req, res) => {
    res.send("welcome");
}

const post = async (req, res) => {
    
    if (req.token) { 
        jwt.verify(req.token,process.env.SECRETKEY,(err,authData)=>{
            if(err){
                return res.status(401).send(err);
            }
            return res.send(authData);
        })
    }
    else {
        const { username, password } = req.body;

        if (!username || !password) return res.status(400).send("Please provide all require fields");
        
        let result =await getPasswordOfUserName(username);
    
        if(result.error) return res.status(500).send("sql error");
        
        if (result.rows.length == 0) return res.status(400).send("username not found");

        if (result.rows[0].password != password) return res.status(401).send("Invalid password");
        jwt.sign({ username, password }, process.env.SECRETKEY, { expiresIn: "600s" },(err,token)=>{
            if(err){
                return res.status(400).send(err);
            }
            
            return res.send(token);
        })
    }
}

const verifyToken = (req,res,next)=>{
    if(req.headers.authorization) {
        let token = req.headers.authorization.split(" ")[1];
        req.token= token;
    }
    next();
}

module.exports = { get, post ,verifyToken}