const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const attendanceController = require("../controllers/attendanceController");

router.post("/generate/:registerId", auth, attendanceController.generateQR);
router.get("/form/:token", (req, res, next) => {

    res.set({
        "Cache-Control": "no-store",
        "Pragma": "no-cache",
        "Expires": "0"
    });

    next();

}, attendanceController.form);
router.post("/submit/:token", attendanceController.submit);

module.exports = router;