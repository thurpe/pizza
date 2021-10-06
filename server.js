const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas", pizzasRoute);

const dbConfig = require("./db");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is now running on port 5000 🔥"));
