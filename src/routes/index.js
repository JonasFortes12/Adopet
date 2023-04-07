import express from "express";
import router from "./tutorsRoutes.js";


const routers = (app) => {

    app.get('/', (req, res) =>{

        res.status(200).send("Página Inicial!")

    });


    app.use(
        express.json(),
        router
    )

}


export default routers;