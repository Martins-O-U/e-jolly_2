const express = require('express');
const PlannersInfo = require('./ownerControler');
const router = express.Router();
const db = require('./ownersModel');
const bcrypt = require('bcryptjs')
const { authenticate } = require('../../Auth/Authentication')

router.post('/register', PlannersInfo.signup)
router.post('/login', PlannersInfo.login)
router.get('/allOwners', authenticate, PlannersInfo.getAllPlanners);
router.get('/anOwner/', PlannersInfo.getAPlanner);



module.exports = router;