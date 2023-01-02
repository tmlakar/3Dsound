const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
router.get("/", ctrlMain.main);

const ctrlMain1 = require("../controllers/main1");
router.get("/1", ctrlMain1.main);
module.exports = router;