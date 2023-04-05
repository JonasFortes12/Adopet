import express from "express";
import db from "./config/dbConnect.js";


//DB events listeners:
db.on("error", () =>{
    console.log.bind(console, "Connection error!")
})
db.once("open", () => {
    console.log('BD connection made successfuly!')
})



const app = express();
app.use(express.json());


export default app;