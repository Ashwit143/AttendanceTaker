const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const serviceController = require("../controllers/serviceController");

router.get("/dashboard", auth, serviceController.dashboard);
router.get("/success", serviceController.success);
router.get("/", serviceController.home);

module.exports = router;