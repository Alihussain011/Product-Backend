const { get, post, verifyToken } = require("../controller/loginController");

const loginRoute = require("express").Router();

loginRoute.get("/:id?",get);
loginRoute.post("/",verifyToken,post);

module.exports= loginRoute;