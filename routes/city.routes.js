const express = require('express');
const {deleteCity, createCity, getAllCities} = require('../controllers/city.controller');
const {authenticated} = require('../middlewares/auth.middleware');
const {adminMiddleware} = require('../middlewares/authorization.middleware');
const router = express.Router();

router.post('/create', authenticated, adminMiddleware, createCity);
router.get('/all', authenticated, getAllCities);
router.delete('/delete/:id', authenticated, adminMiddleware, deleteCity);

module.exports = router;