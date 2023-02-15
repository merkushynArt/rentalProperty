import { Router } from "express";
import { getMe, login, registration } from "../controllers/auth.js";
import  { checkAuth } from "../utils/checkAuth.js";

const router = new Router()

//Ragistration http://localhost:3002/api/auth/registration
router.post('/registration', registration);

//Ragistration http://localhost:3002/api/auth/login
router.post('/login', login);

//Get me http://localhost:3002/api/auth/me
router.get('/me', checkAuth, getMe)

export default router;