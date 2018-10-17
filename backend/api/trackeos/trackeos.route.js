const express = require("express");
const trackeosController = require("./trackeos.controller");

const router = express.Router();

router.route("/").get(trackeosController.listConfirmed);

module.exports = router;
