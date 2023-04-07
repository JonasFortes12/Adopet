import express from "express";
import tutors from "../models/Tutor.js";

class TutorController {

    static registerTutor = async (req, res) => {
        let newTutor = new tutors(req.body);

        try {
            await newTutor.save()
            res.status(201).send(newTutor.toJSON())
        } catch (err) {
            res.status(500).send({message: `${err.message} - Error registering new Tutor!`})
        }

    }

}

export default TutorController;