const express = require('express');
const router = express.Router();
const { signup, login, getAllUsers, deleteUser } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', getAllUsers);
router.delete('/user/:id', deleteUser);

module.exports = router;
