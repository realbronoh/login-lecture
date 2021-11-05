"use strict"

const id = document.querySelector("#id")
const psword = document.querySelector("#psword")
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)   // json 형식(텍스트)로 변환
    });

};