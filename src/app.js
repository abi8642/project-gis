const express = require("express");
const cors = require("cors");
require("dotenv").config();
const placeRoutes = require("./routes/placeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("API Health is ok");
});
app.use("/api", placeRoutes);

module.exports = app;
