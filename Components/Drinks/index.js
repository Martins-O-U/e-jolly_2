const express = require('express');
const DrinksInfo = require('./DrinksControllers');
const router = express.Router();

router.get('/allDrinks/:id', DrinksInfo.getAllDrinks);
router.get('/drinks/:id', DrinksInfo.getADrink);
router.delete('/drinks/:id', DrinksInfo.deleteDrinkInfo);
router.patch('/drinks/:id', DrinksInfo.updateDrinkInfo);
router.post('/drinks/', DrinksInfo.addADrink);

module.exports = router;