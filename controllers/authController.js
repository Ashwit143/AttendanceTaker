const jwt = require("jsonwebtoken");
const Professor = require("../models/professor");
const bcrypt = require("bcrypt");

const register = async (req, res) =>{
    try{
        const {name, email, password} = req.body;

        const existingProfessor = await Professor.findOne({email});

        if(existingProfessor) return res.send("Professor already exists");

        const hashedPassword = await bcrypt.hash(password,10);

        await Professor.create({
            name,
            email,
            password : hashedPassword
        });

        return res.send("Professor registered successfully");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
};

const reg = (req, res) => {
    return res.render("register");
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const professor = await Professor.findOne({ email });

        if (!professor) {
            return res.send("Invalid email or password");
        }

        const match = await bcrypt.compare(password, professor.password);

        if (!match) {
            return res.send("Invalid password");
        }

        const token = jwt.sign(
            {
                professorId: professor._id
            },
            process.env.JWT_SECRET
        );

        res.cookie("token", token, {
            httpOnly: true
        });

        res.redirect("/dashboard");
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Intenal server error");
    }
};

const log = (req, res) =>{
    res.render("login");
};

const logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
};


module.exports = { register, login, logout, reg, log };