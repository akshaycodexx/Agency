const express = require('express');
const router = express.Router();
const { loginAdmin, getDashboardStats } = require('../controllers/adminController');

router.post('/login', loginAdmin);
router.get('/stats', getDashboardStats);

module.exports = router;
