const express = require("express");
const dotenv = require("dotenv")
const app = express();

dotenv.config();


const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server started in PORT 3000"))