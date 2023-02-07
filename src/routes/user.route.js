const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');

//methode get
router.get('/', verifyToken, verifyIsAdmin, userController.getUser);
//methode put
router.put('/:id', verifyToken, verifyIsAdmin, userController.updateUser);
//methode delete
router.delete('/:id', verifyToken, verifyIsAdmin, userController.deleteUser);
//methode get
router.get('/users', verifyToken, verifyIsAdmin, userController.getUsers);

module.exports = router;
