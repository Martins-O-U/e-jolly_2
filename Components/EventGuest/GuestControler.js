const Users = require('./GuestModel');

const getAGuestById = async (req, res) => {
    try {
        const oneGuest = await Users.findGuestById(req.params.id)
        return res.status(200).json(oneGuest);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAGuestByName = async (req, res) => {
    try {
        const searches = req.query
        console.log(searches)
        const AGuest = await Users.findGuestByName(searches)
        return res.status(200).json(AGuest);
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

const addAGuest = async (req, res) => {
    try {
        const newGuest = req.body;
        const addedGuest = await Users.addGuest(newGuest);
        return res.status(201).json(addedGuest);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
const linkAGuest = async (req, res) => {
    let { guest_id, guestEvent_id, guestTable_id, guestFood, guestDrink } = req.body;
    const linkGuests = reg.body;
    if (guest_id && guestEvent_id && guestTable_id && guestFood && guestDrink) {
        try {
            const linkedGuest = await Users.linkGuest(linkGuests);
            return res.status(201).json(linkedGuest);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    else {
        res.status(400).json({ message: "Please Provide guest_id, guestEvent_id, guestTable_id, guestFood, guestDrink" })
    }

}

const deleteGuestInfo = async (req, res) => {
    try {
        const { id } = req.params;
        await Users.deleteGuestName(id);
        return res.sendStatus(204).json({ Message: `Guest with id ${req.params.id} has been deleted` });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateGuestInfo = async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        await Users.updateGuestName(id, changes);
        const updatedGuest = await Users.findGuestById(id);
        return res.status(200).json(updatedGuest);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGuests,
    getAGuestByName,
    getAGuestById,
    updateGuestInfo,
    deleteGuestInfo,
    addAGuest,
    linkAGuest
}