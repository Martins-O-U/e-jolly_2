const express = require('express');
const PlannersInfo = require('./ownerControler');
const router = express.Router();

router.get('/allOwners', PlannersInfo.getAllPlanners);
router.get('/anOwner/:id', PlannersInfo.getAPlanner);


module.exports = router;