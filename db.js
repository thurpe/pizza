const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://root:toor@cluster0.cguhf.mongodb.net/mern-pizza";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("DB connection has failed");
});

connection.on("connected", () => {
  console.log("DB plugged-in ✅");
});

module.exports = mongoose;
