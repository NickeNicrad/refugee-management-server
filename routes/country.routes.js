const express = require('express');
const {deleteCountry, createCountry, getAllCountries} = require('../controllers/country.controller');
const {authenticated} = require('../middlewares/auth.middleware');
const {adminMiddleware} = require('../middlewares/authorization.middleware');
const router = express.Router();

router.post('/create', authenticated, adminMiddleware, createCountry);
router.get('/all', authenticated, getAllCountries);

module.exports = router;