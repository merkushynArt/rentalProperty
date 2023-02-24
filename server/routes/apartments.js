import { Router } from 'express';
import { createApartment } from '../controllers/apartments.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

// Create Post
// http://localhost:3002/api/apartments
router.post('/', checkAuth, createApartment);

export default router;