//express intalation
const express = require("express");
const app = express();

// dotenv configaration
const dotenv = require("dotenv");
dotenv.config();
const productRouter = require("./src/router/productsRoute");
// geting port from .env
const PORT = process.env.PORT||5000;
// middle
app.use(express.json());
app.use("/app/products",productRouter);

// listing the server on port
app.listen(PORT,()=>{ console.log(`serever is listing on ${PORT}`)})