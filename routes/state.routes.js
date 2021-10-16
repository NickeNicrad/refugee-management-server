const express = require('express');
const {deleteState, createState, getAllStates} = require('../controllers/states.controller');
const router = express.Router();

router.post('/create', createState);
router.get('/all', getAllStates);
router.delete('/delete/:id', deleteState);

module.exports = router;