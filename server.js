require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const routes = require("./routes");
const constants = require("./constants");


app.listen(process.env.PORT, () => {
    console.log(`Habemus connexion ad portum ${process.env.PORT}`)
})