require("dotenv").config;

const User = require('../models').User;
const GameData = require("../models").Gamedata;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const constants = require("../constants");

const getUserData = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include:[GameData]
    })
    .then(userData => {
        res.status(constants.SUCCESS).json({
            "userData": userData
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getUserData
}