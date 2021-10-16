const express = require('express');
const router = express.Router();

const {authenticated} = require('../middlewares/auth.middleware');
const {getProfile, updateUser, getAllUsers, deleteUser, updateUserState} = require('../controllers/user.controller');
const {adminMiddleware} = require('../middlewares/authorization.middleware');

router.get('/single', authenticated, getProfile);
router.get('/all', authenticated, getAllUsers);
router.patch('/update/:id', authenticated, updateUser);
router.patch('/update/state/:id', authenticated, updateUserState);
router.delete('/delete/:id', authenticated, adminMiddleware, deleteUser);

module.exports = router;