const express = require('express');
const router = express.Router();
const controller = require('../controller/UserController.js');

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/contact', controller.contact);

router.get('/services', controller.services);

router.get('/shop', controller.shop);

module.exports = router;

