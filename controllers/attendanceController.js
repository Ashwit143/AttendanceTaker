const Register = require("../models/register");
const QRModel = require("../models/qrcode")
const {markPresent} = require("../services/attendanceServices");
const QRCode = require("qrcode");
const { v4: uuidv4 } = require("uuid");

const generateQR = async (req, res) => {
    const { registerId } = req.params;
    try {
        const register = await Register.findOne({
            _id: registerId,
            professorId: req.professor.professorId
        });

        if (!register) {
            return res.status(404).send("Register not found");
        }
        const token = uuidv4();
        await new QRModel({ token, registerId }).save();

        const url = `http://192.168.1.7:3001/form/${token}`;
        const qrImage = await QRCode.toDataURL(url);

        res.render("generate", { qrImage });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error generating QR");
    }
};

const form = async (req, res) => {
    const { token } = req.params;
    const record = await QRModel.findOne({ token });

    if (!record) return res.send("<h1 style='color:red;'>❌ Invalid or Expired QR Code</h1>");

    const now = Date.now();
    const age = (now - record.createdAt.getTime()) / 1000;
    if (age > 15) return res.send("<h1 style='color:red;'>❌ QR Code Expired</h1>");

    return res.render("form", { token });
}

const submit = async (req, res) => {
    const { token } = req.params;
    const { studentName, rollNo } = req.body;

    const record = await QRModel.findOne({ token });
    if (!record) return res.send("<h1 style='color:red;'>❌ Invalid or Expired QR Code</h1>");

    const register =
        await Register.findById(
            record.registerId
        );


    if (!register) {
        return res.send("Register not found");
    }

    record.studentName = studentName;
    record.rollNo = rollNo;
    await record.save();

    // Mark present in student list Excel
    const success = markPresent(studentName, rollNo, register.excelFile);
    if (!success) return res.send("<h1 style='color:red;'>❌ Student not in list!</h1>");

    res.redirect(`/success?name=${studentName}&rollNo=${rollNo}`);
}
module.exports = { generateQR, form, submit };
