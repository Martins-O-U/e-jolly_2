const Users = require('./ownersModel');
const bcrypt = require('bcryptjs')
const { generateToken } = require('../../Auth/Authentication')

const signup = async (req, res) => {
    let user = req.body;
    let { username, password, email, phoneNumber, location } = req.body;
    if (username && password && email) {
        try {
            const hash = await bcrypt.hashSync(user.password, 10);
            user.password = hash;
            const savedPlanner = await Users.addPlanner(user)
            return res.status(201).json(savedPlanner)
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    } else {
        res.status(400).json({ message: "Please Provide needed columns (email, username and password)" })
    }
}


const login = async (req, res) => {
    let { username, password } = req.body;
    if (!username && !password) {
        res.status(400).json({ message: "Please Provide username and password" })
    } else {
        try {
            const user = await Users.findPlannersBy({ username }).first()
            console.log(user + " before if ")
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome, on board ${user.username}`, token
                })
            } else {
                res.status(401).json({ message: "Invalid credentials." });
            }
        } catch (error) {
            res.status(500).json({ message: "Oops!, Something went wrong:- " + error.message });
        }
    }
};


const getAPlanner = async (req, res) => {
    try {
        const searchTerms = req.query
        const owner = await Users.findAPlanner(searchTerms)
        return res.status(200).json(owner);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllPlanners = async (req, res) => {
    try {
        const owners = await Users.findAllPlanners()
        return res.status(200).json(owners);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllPlanners,
    getAPlanner,
    signup,
    login
}