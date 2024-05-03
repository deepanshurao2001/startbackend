require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const tagRoutes = require("./routes/tagRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", tagRoutes);

const port = 5000;
const uri =
  "mongodb+srv://raodeepanshu99:5ktfM7JLuPNkJ1oj@cluster0.agztd08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // You can start defining and using your models here
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
