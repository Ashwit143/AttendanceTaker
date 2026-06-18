const Register = require("../models/register");

const registersNew = async (req, res) => {
    try {
        const { section, subject } = req.body;

        const register = await Register.create({
            professorId: req.professor.professorId,
            section,
            subject,
            excelFile: req.file.path
        });

        return res.json(register);
    }
    catch (err) {
        console.log(err);

        res.status(500).send("Internal server error");
    }
};

const regnew = (req, res) => {
    return res.render("createRegister");
}

const registers = async (req, res) => {
    const registers = await Register.find({ professorId: req.professor.professorId });

    return res.render("registers", { registers });
}
module.exports = { registersNew, registers, regnew};