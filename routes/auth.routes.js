const express = require('express');
const router = express.Router();

const {adminMiddleware} = require('../middlewares/authorization.middleware');
const {login, signup} = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;