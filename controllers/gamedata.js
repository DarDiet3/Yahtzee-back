require("dotenv").config;

const GameData = require("../models").Gamedata;
const constants = require("../constants");

const addData = (req, res) => {
    const data = req.body
    let dataToAdd = {
        userId: data.currentUser.id,
        victorypoints: data.totalPoints,
        rock: data.diceRolled.rock,
        wheat: data.diceRolled.wheat,
        sheep: data.diceRolled.sheep,
        brick: data.diceRolled.brick,
        wood: data.diceRolled.wood,
        gold: data.diceRolled.gold,
        settlements: data.buildCounts.settlement,
        cities: data.buildCounts.city,
        roads: data.buildCounts.road,
        knights: data.buildCounts.knight,
        jokers: data.jokerPlayed,
        round1: data.roundPoints[0].points,
        round2: data.roundPoints[1].points,
        round3: data.roundPoints[2].points,
        round4: data.roundPoints[3].points,
        round5: data.roundPoints[4].points,
        round6: data.roundPoints[5].points,
        round7: data.roundPoints[6].points,
        round8: data.roundPoints[7].points,
        round9: data.roundPoints[8].points,
        round10: data.roundPoints[9].points,
        round11: data.roundPoints[10].points,
        round12: data.roundPoints[11].points,
        round13: data.roundPoints[12].points,
        round14: data.roundPoints[13].points,
        round15: data.roundPoints[14].points,
        trades: data.trades,
        tradedrock: data.tradeCount.rock,
        tradedwheat: data.tradeCount.wheat,
        tradedsheep: data.tradeCount.sheep,
        tradedbrick: data.tradeCount.brick,
        tradedwood: data.tradeCount.wood,
        jokerock: data.jokerCount.rock,
        jokewheat: data.jokerCount.wheat,
        jokesheep: data.jokerCount.sheep,
        jokebrick: data.jokerCount.brick,
        jokewood: data.jokerCount.wood,
        gamecomplete: data.gameComplete
      }
    GameData.create(dataToAdd)
    .then(newData => {
        res.status(constants.SUCCESS).json({
            "req": req.body
        })
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    addData
}