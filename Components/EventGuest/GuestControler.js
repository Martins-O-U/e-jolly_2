const Users = require('./GuestModel');

const getAGuestById = async (req, res) => {
    try {
        const oneGuest = await Users.findGuestById(req.params.id)
        return res.status(200).json(oneGuest);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllGuests = async (req, res) => {
    try {
        const guests = await Users.findAllGuest(req.params.id)
        return res.status(200).json(guests);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllGuests,
    getAGuestById
}