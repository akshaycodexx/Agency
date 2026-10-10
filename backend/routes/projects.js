const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);
router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
