const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const getRoute = require("./routes/Endpoints");

app.use("/Paris", getRoute);

app.get("/", (req, res) => {
  res.send("en ligne !");
});

//Connexion à MongoDB
mongoose.connect(
  `${process.env.REACT_APP_ACCESS_DB}`,
  { useNewUrlParser: true },
  () => console.log("connetected to DB !")
);

app.listen(process.env.REACT_APP_PORT || 4000);
