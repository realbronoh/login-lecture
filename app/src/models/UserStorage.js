"use strict"

const fs = require("fs").promises;      // promise 객체 반환

class UserStorage {

    static #getUserInfo(data, id) {     // private는 최상단에 위치해야함
            const users = JSON.parse(data)
            const idx = users.id.indexOf(id);   // users.id 배열에서 파라미터 'id'의 인덱스
            const userKeys = Object.keys(users); // [id, psword, name]
            const userInfo = userKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            return userInfo;
    }
    /* users 데이터 은닉화 후
     * getUsers()로 접근하게 함.. 무슨의미?? */

    static getUsers(...fields) {         // static: UserStorage에서 직접 접근 가능
        // const users = this.#users;       // ...fields: 배열로 인자들 받아옴
        const newUsers = fields.reduce( (newUsers, field) => {
            // fields를 순회하면서(각 원소는 field)
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});     // arr.reduce(func, {})에서... {} == newUsers의 초기값
        return newUsers;       
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")   // promise 객체 반환
            .then( (data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.errer);  // 에러 발생시 (err) => console.error(err) 와 같음
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

        return {success: true};
    };
};


module.exports = UserStorage;