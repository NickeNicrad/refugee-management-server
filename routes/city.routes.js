const express = require('express');
const {deleteCity, createCity, getAllCities} = require('../controllers/city.controller');
const router = express.Router();

router.post('/create', createCity);
router.get('/all', getAllCities);
router.delete('/delete/:id', deleteCity);

module.exports = router;