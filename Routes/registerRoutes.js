const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");
const upload = require("../utils/multer");
const auth = require("../middlewares/auth");

router.post("/registers/new", auth, upload.single("excelFile"), registerController.registersNew);
router.get("/registers", auth, registerController.registers);
router.get("/registers/new", auth, registerController.regnew);


module.exports = router;