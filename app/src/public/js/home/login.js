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

    fetch("/login", {       // 이 object가 전달됨 --> ~~~.body로 요청 접근 가능
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)   // json 형식(텍스트)로 변환
    })
        .then( (res) => res.json())  // then: fetch로 전송 후 서버에서 전송한 데이터 받기: res로 전달됨
    //    .then(console.log);          // 함수 인자와 반환값이 같을 경우 그냥 함수 자체를 써도 가능
        .then( (res) => {
            if (res.success){
                location.href = "/";    // root로 이동
            } else {
                alert(res.msg);
            }
        })
        .catch( (err) => {      // 에러 발생 처리 부분
            console.error(new Error("로그인 중 에러 발생"));
        });
    /* res.json()의 반환 값은 Promise이다. 기본 res의 반환 값은 Response 스트림인데, 
     * ".json()" 메서드를 통해 Response 스트림을 읽을 수 있다. Response는 데이터가 모두 받아진 상태가 아니다.
     * ".json()"으로 Response 스트림을 가져와 완료할 때까지 읽는다. 다 읽은 body의 텍스트를 Promise 형태로 반환한다.
     * 
     * 그리고 Promise를 보기 위해서 한번 더 then을 해준다
     */

};