"use strict";

const express = require("express");
const router = express.Router();    // router 사용

const ctrl = require("./home.ctrl"); // controller import : 함수(기능) 분리

router.get("/", ctrl.renderHome);
router.get("/login", ctrl.renderLogin);

module.exports = router;    // 내보내기

