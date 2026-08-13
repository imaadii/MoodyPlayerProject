import express from "express";
import cors from "cors";
import dotenv from "dotenv";



const app = express();



app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Moody PLayer is running");
})





export default app;