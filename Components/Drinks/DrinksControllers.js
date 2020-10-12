const Drinks = require('./DrinksModel');

const addADrink = async (req, res) => {
    try {
        const newDrink = req.body;
        const addedDrink = await Drinks.addDrinks(newDrink);
        return res.status(201).json(addedDrink);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllDrinks = async (req, res) => {
    try {
        const event_id = req.params.id
        const event_drinks = await Drinks.findAllEventDrinks(event_id)
        return res.status(200).json(event_drinks);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getADrink = async (req, res) => {
    try {
        const drink_id = req.params.id
        const drink = await Drinks.findAddedDrink(drink_id)
        return res.status(200).json(drink);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteDrinkInfo = async (req, res) => {
    try {
        const { id } = req.params;
        await Drinks.deleteDrinkName(id);
        return res.status(204).json({ Message: `Drink with id ${req.params.id} has been deleted` });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateDrinkInfo = async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        await Drinks.updateDrinkName(id, changes);
        const updatedDrink = await Drinks.findAddedDrink(id);
        return res.status(200).json(updatedDrink);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addADrink,
    getAllDrinks,
    getADrink,
    updateDrinkInfo,
    deleteDrinkInfo
}