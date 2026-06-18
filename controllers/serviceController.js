const dashboard = (req, res) => {
    return res.render("dashboard");
};

const success = (req, res) => {
    const { name, rollNo } = req.query;
    return res.render("success", { name, rollNo });
};

const home = (req, res) => {
    return res.render("index");
}

module.exports = { dashboard, success, home };