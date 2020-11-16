const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/addData", ctrl.data.addData);


module.exports = router;