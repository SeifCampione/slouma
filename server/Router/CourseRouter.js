const express = require("express");
const multer = require("multer");

const {
  getAllCourses,
  getMyCourses,
  createCourse,
  subscribe,
  getById,
  addChapter,
  nextChapter,
} = require("../Controller/courseController");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the file name for uploaded files
  },
});

// Initialize Multer upload middleware
const upload = multer({ storage: storage });
const CourseRouter = express.Router();

CourseRouter.get("/", getAllCourses);
CourseRouter.get("/Mycourses", getMyCourses);
CourseRouter.get("/details/:id", getById);

// Use Multer middleware for the createCourse route only
CourseRouter.post("/", upload.single("image"), createCourse);
CourseRouter.post("/subscribe", subscribe);
CourseRouter.post("/chapter", addChapter);
CourseRouter.post("/next", nextChapter);

module.exports = CourseRouter;
