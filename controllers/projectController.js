import Project from '../models/project.js';

// Controller methods for CRUD operations
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getProjectById = async (req, res) => {
    const projectId = req.params.projectId;
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProject = async (req, res) => {
    const { name, description, userId } = req.body;
    try {
        const newProject = new Project({ name, description, userId });
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    const projectId = req.params.projectId;
    const updateData = req.body;
    try {
        const updatedProject = await Project.findByIdAndUpdate(projectId, updateData, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    const projectId = req.params.projectId;
    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
