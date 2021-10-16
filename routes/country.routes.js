const express = require('express');
const {deleteCountry, createCountry, getAllCountries} = require('../controllers/country.controller');
const router = express.Router();

router.post('/create', createCountry);
router.get('/all', getAllCountries);

module.exports = router;