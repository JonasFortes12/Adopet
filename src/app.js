import express from "express";
import db from "./config/dbConnect.js";
import routers from "./routes/index.js";


//DB events listeners:
db.on("error", () =>{
    console.log.bind(console, "Connection error!")
})
db.once("open", () => {
    console.log('BD connection made successfuly!')
})



const app = express();
routers(app);


export default app;