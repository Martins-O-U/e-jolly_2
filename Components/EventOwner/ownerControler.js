const Users = require('./ownersModel');
const bcrypt = require('bcryptjs')
const { authenticate, generateToken } = require('../../Auth/Authentication')

const getAPlanner = async (req, res) => {
    try {
        console.log(req.params.id)

        const owner = await Users.findAPlanner(req.params.id)
        console.log(owner)
        return res.status(200).json(owner);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllPlanners = async (req, res) => {
    try {
        const owners = await Users.findAllPlanners()
        console.log(owners)
        return res.status(200).json(owners);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllPlanners,
    getAPlanner
}