const express = require("express");

const app = express();
app.use(express.json());

const dbConfig = require("./db");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is now running on port 5000 🔥"));
