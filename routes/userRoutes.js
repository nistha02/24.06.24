import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = Router();

// User routes
router.get('/', getUsers);           
router.get('/:userId', getUserById); 
router.post('/', createUser);        
router.put('/:userId', updateUser);  
router.delete('/:userId', deleteUser);

export default router;
