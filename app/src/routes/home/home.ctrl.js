"use strict"

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {    // callback function: request랑 reponse
        res.render("home/index");
    },
    login: (req, res) => {   // "/login"에서 "/"는 꼭 넣어준다!
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword; 

        const users = UserStorage.getUsers("id", "psword");
        const response = {};    // empty response to be completed

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            // 성공한 경우
            if (users.psword[idx] === psword){
                response.success = true; 
                return res.json(response);   // {success: true}를 json으로 만들어 res에 넣어준다??
            }
        }
        // 실패했을 경우
        response.success = false;
        response.msg = "로그인에 실패했습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
}