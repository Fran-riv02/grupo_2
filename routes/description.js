const express = require('express');
const router = express.Router();
const descriptionController = require('../controllers/descriptionController');


router.get('/description', descriptionController.mostrar);

module.exports = router;