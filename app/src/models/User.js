"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {     // await은 async 안에서 사용 가능!
        const client = this.body;
        const {id, psword} = await UserStorage.getUserInfo(client.id);  // await: promise를 반환하는 함수 앞에 사용--다 받을때까지 기다림

        if (id) {
            if (id === client.id && psword === client.psword) {
                return {success: true}; 
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;