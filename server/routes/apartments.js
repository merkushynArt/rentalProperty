import { Router } from 'express';
import { createApartment, getAll, getById, removeApartment, updateApartment } from '../controllers/apartments.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

//Create Post
//http://localhost:3002/api/apartments
router.post('/', checkAuth, createApartment);

//Get all apartments
//http://localhost:3002/api/apartments
router.get('/', getAll);

// Get apartment by id
// http://localhost:3002/api/apartment/:id
router.get('/:id', getById);

//Remove apartment
//http://localhost:3002/api/apartment/:id
router.delete('/:id', checkAuth, removeApartment);

//Update apartment
//http://localhost:3002/api/apartment/:id
router.put('/:id', checkAuth, updateApartment);
export default router;