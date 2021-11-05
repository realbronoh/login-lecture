"use strict"

const renderHome = (req, res) => {    // callback function: request랑 reponse
    res.render("home/index");
};

const renderLogin = (req, res) => {   // "/login"에서 "/"는 꼭 넣어준다!
    res.render("home/login");
};

module.exports = {
    renderHome,
    renderLogin
}