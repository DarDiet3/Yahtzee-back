const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.get("/:id", ctrl.user.getUserData);
router.put("/edit", ctrl.user.editUser);
router.delete("/delete/:user", ctrl.user.deleteUser);

module.exports = router;