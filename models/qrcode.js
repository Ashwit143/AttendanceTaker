const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema({
    studentName: { type: String },
    rollNo: { type: Number },
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 7
    },
    registerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true
    }
});

module.exports = mongoose.model("QRCode", qrSchema);