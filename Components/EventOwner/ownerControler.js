const Users = require('./ownersModel');

const getAnOwner = async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        // const owner = Users.findAnOwners(req.params.id)
        return res.status(200).json(owner);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllOwners = async (req, res) => {
    try {
        const owners = Users.findAllOwners()
        return res.status(200).json(owners);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllOwners,
    getAnOwner
}