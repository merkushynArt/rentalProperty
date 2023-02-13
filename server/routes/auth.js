import { Router } from "express";
import { login, registration } from "../controllers/auth.js";

const router = new Router()

//Ragistration http://localhost:3002/api/auth/registration
router.post('/registration', registration);

//Ragistration http://localhost:3002/api/auth/login
router.post('/login', login);

export default router;