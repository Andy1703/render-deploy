const userController = require('../controllers/userController');

const router = require('express').Router();

router.post('/', userController.addUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getById);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;