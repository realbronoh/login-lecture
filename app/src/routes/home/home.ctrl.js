"use strict"

const users = {
    id: ["jinh", "happy", "ND"],
    psword: ["1234", "1234", "123456"]
};

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
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({   // {success: true}를 json으로 만들어 res에 넣어준다??
                    success: true,
                });
            }
            return res.json({
                success: false,
                msg: "로그인에 실패했습니다.",
            })
        }
    },
};

module.exports = {
    output,
    process,
}