const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  applyForJob,
  getApplications,
  updateApplicationStatus,
  deleteApplication
} = require('../controllers/careerController');

router.post('/apply', upload.single('resume'), applyForJob);
router.get('/applications', getApplications);
router.patch('/applications/:id', updateApplicationStatus);
router.delete('/applications/:id', deleteApplication);

module.exports = router;
