"use strict"

class UserStorage {
    /* users 데이터 은닉화 후
     * getUsers()로 접근하게 함.. 무슨의미?? */

    static #users = {                   // static: 클래스 객체를 만들지 않고 클래스 자체로 접근 가능하게 함
        id: ["jinh", "happy", "ND"],    // # private변수로 만듦
        psword: ["1234", "1234", "123456"],
        name: ["진형", "해피", "앤디"]
    };

    static getUsers(...fields) {         // static: UserStorage에서 직접 접근 가능
        const users = this.#users;       // ...fields: 배열로 인자들 받아옴
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
        const users = this.#users;
        const idx = users.id.indexOf(id);   // users.id 배열에서 파라미터 'id'의 인덱스
        const userKeys = Object.keys(users); // [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;

    }
};


module.exports = UserStorage;