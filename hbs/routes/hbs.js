const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
router.get("/", ctrlMain.main);
module.exports = router;