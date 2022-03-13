import express = require("express");
import {Application} from "express";
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();
app.use("/api/", userRoutes);
app.listen(8060, () => {
    console.log("Connected")
})

