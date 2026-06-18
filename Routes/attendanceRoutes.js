const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const attendanceController = require("../controllers/attendanceController");

router.get("/generate/:registerId", auth, attendanceController.generateQR);
router.get("/form/:token", attendanceController.form);
router.post("/submit/:token", attendanceController.submit);

module.exports = router;