const express = require('express');
const {createChild, getAllChildren, updateChild, deleteChild} = require('../controllers/child.controller');
const {authenticated} = require('../middlewares/auth.middleware');
const {userMiddleware} = require('../middlewares/authorization.middleware');
const router = express.Router();

router.post('/create', authenticated, userMiddleware, createChild);
router.get('/all', authenticated, getAllChildren);
router.patch('/update/:id', authenticated, userMiddleware, updateChild);
router.delete('/delete/:id', authenticated, userMiddleware, deleteChild);

module.exports = router;