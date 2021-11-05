"use strict";
const express = require("express"); // import express module
const app = express();              // app이라는 변수에 express 실행
const bodyParser = require("body-parser");

const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");     // 처음에 view를 ./src/views폴더로 지정함 
app.set("view engine", "ejs");  // ejs: 많이 사용하는 view 엔진

/* 미들웨어 설정 */
app.use(express.static(`${__dirname}/src/public`)); // 정적경로 추가!! 이 안에 있는 것 그냥 접근 가능
// 클라이언트에서 받은 request에 body라는 property를 object로 주어 우리가 볼 수 있게 함
// req.body로 접근 가능
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", home);   // use -> 미들웨어를 등록해주는 메서드



module.exports = app;


// /* EXPRESS 사용 안하고 하드코딩 
//  * EXPRESS를 사용해야 하는 이유 */
// const http = require("http"); // 내장 모듈
// const app = http.createServer(function(req, res){

//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"}); // 응답시 요청
//     if (req.url === "/"){
//         res.end("여기는 루트입니다");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, function(){
//     console.log("http로 가동되 서버입니다.");
// });