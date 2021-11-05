"use strict";
/* 실행 파일 */

// app 불러오기
const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {        // 3000 포트에 서버 띄우기, 콜백함수
    console.log("server start!");
});