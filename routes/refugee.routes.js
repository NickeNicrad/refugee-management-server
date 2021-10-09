const express = require('express');
const router = express.Router();
const {userMiddleware} = require('../middlewares/authorization.middleware');
const {createRefugee, getAllRefugees, updateRefugee, deleteRefugee} = require('../controllers/refugee.controller');
const {authenticated} = require('../middlewares/auth.middleware');

router.post('/create', authenticated, userMiddleware, createRefugee);
router.get('/all', authenticated, getAllRefugees);
router.patch('/update/:id', authenticated, userMiddleware, updateRefugee);
router.delete('/delete/:id', authenticated, userMiddleware, deleteRefugee);

module.exports = router;