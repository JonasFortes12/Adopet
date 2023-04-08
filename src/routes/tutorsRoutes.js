import express from "express";
import TutorController from "../controllers/tutorsController.js";


const router = express.Router();

router.get('/tutor', TutorController.getAllTutors)

router.get('/tutor/:id', TutorController.getTutorById)

router.post('/tutor', TutorController.registerTutor)

router.put('/tutor/:id', TutorController.updateTutor)

router.delete('/tutor/:id', TutorController.deleteTutorById)




export default router;
