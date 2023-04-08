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

    static updateTutor = async (req, res) =>{

        let idTutor = req.params.id 

        try {
            await tutors.findByIdAndUpdate(idTutor, {$set: req.body})
            res.status(201).send(await tutors.findById(idTutor))

        } catch (err) {
            res.status(500).send({message: err.message})
        }



    }

    static getAllTutors = async (req, res) =>{
        
        try {
            res.status(200).send(await tutors.find())

        } catch (err) {
            res.status(500).send({message: err.message})
        }

    }


}

export default TutorController;