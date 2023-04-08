import express from "express";
import TutorController from "../controllers/tutorsController.js";


const router = express.Router();

router.post('/tutor', TutorController.registerTutor)

router.put('/tutor/:id', TutorController.updateTutor)


export default router;
