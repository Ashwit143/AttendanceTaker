const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.cookies.token;

    try {
        if (!token) {
            return res.redirect("/login");
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.professor = decoded;

        next();
    }
    catch(err){
        return res.redirect("/login");
    }
}

module.exports = auth;