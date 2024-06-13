//express installation
const express = require("express");
const app = express();

// installing cors
const cors = require("cors");

// dotenv configuration
const dotenv = require("dotenv");
dotenv.config();

const productRouter = require("./src/router/productsRoute");
const registrationRoute = require("./src/router/registrationRoute");
const loginRoute = require("./src/router/loginRoute");

// getting port from .env
const PORT = process.env.PORT||5000;

// middlewares
app.use(express.json());
app.use(cors());

// products route
app.use("/app/products",productRouter);

// registration route
app.use("/app/registration",registrationRoute);

// login route
app.use("/app/login",loginRoute);

// listing the server on port
app.listen(PORT,()=>{ console.log(`server is listing on ${PORT}`)});