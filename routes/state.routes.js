const express = require('express');
const {deleteState, createState, getAllStates} = require('../controllers/states.controller');
const {authenticated} = require('../middlewares/auth.middleware');
const {adminMiddleware} = require('../middlewares/authorization.middleware');
const router = express.Router();

router.post('/create', authenticated, adminMiddleware, createState);
router.get('/all', authenticated, getAllStates);
router.delete('/delete/:id', deleteState);

module.exports = router;