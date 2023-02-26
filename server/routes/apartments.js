import { Router } from 'express';
import { createApartment, getAll } from '../controllers/apartments.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

//Create Post
//http://localhost:3002/api/apartments
router.post('/', checkAuth, createApartment);

//Get all apartments
//http://localhost:3002/api/apartments
router.get('/', getAll);

export default router;