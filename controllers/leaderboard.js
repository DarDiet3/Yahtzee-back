require("dotenv").config;

const Board = require('../models').Leaderboard;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const constants = require("../constants");

const addScore = (req, res) => {
    const scoreData = {
        userId: req.body.currentUser.id,
        username: req.body.currentUser.username,
        score: req.body.totalPoints
    }
    Board.create(scoreData)
    .then(newData => {
        res.status(constants.SUCCESS).json({
            "body": newData
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
    
}

const getScore = (req, res) => {
    console.log(req.params)
    Board.findAll({
        order:[["score", "DESC"]],
        limit: req.params.len
    })
    .then(board => {
        res.status(constants.SUCCESS).json({
            "board": board
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    addScore,
    getScore
}