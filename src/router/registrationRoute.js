const { post, get } = require("../controller/registrationController");

const registrationRoute = require("express").Router();

registrationRoute.get("/:id?",get);
registrationRoute.post("/",post);

module.exports = registrationRoute;
