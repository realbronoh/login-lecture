"use strict";

const express = require("express");
const router = express.Router();    // router 사용

const ctrl = require("./home.ctrl"); // controller import : 함수(기능) 분리

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

module.exports = router;    // 내보내기

