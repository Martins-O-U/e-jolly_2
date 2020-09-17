const dotenv = require('dotenv');
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");

const planners = require("./Components/EventOwner/index")
const guest = require("./Components/EventGuest/index")

const server = express()

server.use(
    cors({
        origin: '*',
        methods: "POST,GET,HEAD"
    })
);
server.use(helmet())
server.use(express.json())

server.use('/plannerList', planners);
server.use('/guestList', guest)
server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;