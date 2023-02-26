import { Router } from 'express';
import { createApartment, getAll, getById } from '../controllers/apartments.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

//Create Post
//http://localhost:3002/api/apartments
router.post('/', checkAuth, createApartment);

//Get all apartments
//http://localhost:3002/api/apartments
router.get('/', getAll);

// Get apartment By Id
// http://localhost:3002/api/apartment/:id
router.get('/:id', getById);

export default router;