const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

//methode get
router.get('/', verifyToken, userController.getUser);
