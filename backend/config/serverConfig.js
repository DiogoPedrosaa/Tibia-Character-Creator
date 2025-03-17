require("dotenv").config({ path: "../.env" });
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/characters", require("../routes/characterRoutes"));
app.use("/servers", require("../routes/serverRoutes"));
app.use("/classes", require("../routes/classRoutes"));

app.listen(process.env.PORT, () =>{
    console.log(`servidor rodando na porta ${process.env.PORT}`);
})