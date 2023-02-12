import { Router } from "express";
import { registration } from "../controllers/auth.js";

const router = new Router()

//Ragistration http://localhost:3002/api/auth/registration
router.post('/registration', registration);

export default router