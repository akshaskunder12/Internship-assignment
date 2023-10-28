const express = require("express");
const router = express.Router();

const CourseController = require("../Controllers/coursecontroller");


router.post("/register",CourseController.createCourse);
module.exports = router;