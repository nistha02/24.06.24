import { Router } from 'express';
import { getProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController.js';

const router = Router();

// Project routes
router.get('/', getProjects);             
router.get('/:projectId', getProjectById);
router.post('/', createProject);          
router.put('/:projectId', updateProject); 
router.delete('/:projectId', deleteProject);

export default router;
