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
        include: [GameData]
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

const editUser = (req, res) => {
    console.log(req.body)
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPswd) => {
            if(err) {
                return res.send(err);
            }
            req.body.password = hashedPswd;
            
            User.update(req.body, {
                where: {
                    id: req.body.id
                },
                returning: true
            })
            .then(() => {
                User.findOne({
                    where: {
                        id: req.body.id
                    },
                    include: [GameData]
                })
                .then(userData => {
                    res.status(constants.SUCCESS).json({userData})
                })
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        })
    })
}

const deleteUser = (req, res) => {
    console.log(req.params.user)
}

module.exports = {
    getUserData,
    editUser,
    deleteUser
}