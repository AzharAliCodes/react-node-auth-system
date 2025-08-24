const express = require('express');
const router = express.Router();
const {signup, signin, home} = require('../controllers/authController')
const auth = require('../middleware/authMiddleware')

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/home',auth,home)

module.exports = router;