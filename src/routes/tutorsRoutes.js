import express from "express";
import TutorController from "../controllers/tutorsController.js";


const router = express.Router();

router.post('/tutor', TutorController.registerTutor)


export default router;
