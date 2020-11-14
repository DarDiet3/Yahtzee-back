require("dotenv").config;

const User = require('../models').User;
const Profile = require("../models").Profile;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const constants = require("../constants");



const signUp = (req,res) => {
    console.log(req.body)
    // ToDo: add code for having default profile image and no image
    bcrypt.genSalt(10, (err,salt) => {
        if(err) {
            res.send(`1: ${err}`)
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if(err){
                res.send(`2: ${err}`)
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            }
            req.body.password = hashedPwd;

            User.create(req.body)
            .then(newUser => {
                const token = jwt.sign(
                    {
                        username: newUser.username,
                        id: newUser.id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1 day"
                    }
                );
                    console.log("I'm in here")
                    console.log(`Token: ${token}`)
                res.status(constants.SUCCESS).json({
                    "token": token,
                    "user": newUser
                });


                Profile.create({
                    userId: newUser.id,
                    profileImg: "",
                    bio: "",
                    gamesStarted: 0,
                    gamesFinished: 0,
                    gamesWon: 0,
                    points: 0,
                    plows: 0,
                    combines: 0
                })
                
            })
            .catch(err => {
                console.log(err)
                res.send(`3: ${err}`)
                // res.status(constants.BAD_REQUEST).send(`ERROR: ${err}`);
            })
        })
    })
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if(match){
                    const token = jwt.sign(
                        {
                            username: foundUser.username,
                            id: foundUser.id
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "1 day"
                        }
                    )
                    res.status(constants.SUCCESS).json({
                        "token": token,
                        "user": foundUser
                    });
                } else {
                    res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect USername/Password`);
                }
            })
        } else {
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Passord`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const verifyUser = (req,res) => {
    User.findByPk(req.user.id, {
        attributes: ["id", "username", "email", "name"]
    })
    .then(foundUser => {
        res.status(constants.SUCCESS).json(foundUser);
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`)
    })
}

module.exports = {
    signUp,
    login,
    verifyUser
}