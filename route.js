const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentcontroller");


router.post("/register",StudentController.createStudent);
module.exports = router;