// geting router
const express  = require("express");
const productRouter =  express.Router();
// get ing controller
const { get, post, put, del } = require("../controller/productsController");

productRouter.get("/:id?",get);
productRouter.post("/",post);
productRouter.put("/",put);
productRouter.delete("/",del);

module.exports  = productRouter;