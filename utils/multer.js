// Multer --> to upload multiple excel sheets.
const multer = require("multer");
const fs = require("fs");

if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads", { recursive: true });
}


const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);
  }

});

const upload = multer({
  storage: storage
});

module.exports = upload;