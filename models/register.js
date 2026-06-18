const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    professorId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "Professor"
    },

    section : {
        required : true,
        type : String
    },

    subject : {
        required : true,
        type : String
    },

    excelFile : {
        required : true,
        type : String
    }
});

module.exports = mongoose.model("Register", registerSchema);