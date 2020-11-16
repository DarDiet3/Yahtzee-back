const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/new", ctrl.leaderboard.addScore);
router.get("/:len", ctrl.leaderboard.getScore);

module.exports = router;