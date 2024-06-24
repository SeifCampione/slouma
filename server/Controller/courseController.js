const course = require("../models/course");
const jwt = require("jsonwebtoken");
const userCourse = require("../models/userCourse");
const chapter = require("../models/chapter");
userCourse.belongsTo(course, {
  foreignKey: "courseId",
});
course.hasMany(userCourse, {
  foreignKey: "courseId",
});
chapter.belongsTo(course, {
  foreignKey: "courseId",
});
course.hasMany(chapter, {
  foreignKey: "courseId",
});
exports.createCourse = async (req, res) => {
  try {
    const newCourse = await course.create({
      image: req.file.path, // Access the uploaded file path
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).send(newCourse);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.getAllCourses = async (req, res) => {
  try {
    // hash the password
    const allCourses = await course.findAll({});
    res.status(200).send(allCourses);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.getMyCourses = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const decodedToken = jwt.verify(authorization, process.env.SECRET_KEY);
    const userId = decodedToken.id;
    const myCourses = await userCourse.findAll({
      where: { userId: userId },
      attributes: {
        exclude: ["createdAt", "updatedAt", "id"],
      },
      include: [
        {
          model: course,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    res.status(200).send(myCourses);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

exports.subscribe = async (req, res) => {
  try {
    // hash the password
    const authorisation = req.headers.authorization;
    const decodedToken = jwt.verify(authorisation, process.env.SECRET_KEY);
    const userId = decodedToken.id;
    const subscribe = await userCourse.create({
      courseId: req.body.courseId,
      userId: userId,
      score: 0,
    });
    res.status(200).send(subscribe);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

exports.getById = async (req, res) => {
  try {
    const courseId = req.params.id;

    const authorization = req.headers.authorization;
    const decodedToken = jwt.verify(authorization, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const courseDetails = await course.findOne({
      where: { id: courseId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: chapter,
          required: false, // This makes it a LEFT JOIN
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: userCourse,
          where: { userId: userId },
          required: false, // This makes it a LEFT JOIN
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    res.status(200).send(courseDetails);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.addChapter = async (req, res) => {
  try {
    // hash the password

    const subscribe = await chapter.create({
      courseId: req.body.courseId,
      title: req.body.title,
      description: req.body.description,
      videoUrl: "https://www.youtube.com/watch?v=Y6aYx_KKM7A",
    });
    res.status(200).send(subscribe);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.nextChapter = async (req, res) => {
  try {
    const authorisation = req.headers.authorization;
    const decodedToken = jwt.verify(authorisation, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const currentCourse = await userCourse.findOne({
      where: {
        courseId: req.body.courseId,
        userId: userId,
      },
    });
    console.log(currentCourse.dataValues);

    if (!currentCourse) {
      return res
        .status(404)
        .send({ error: "User not subscribed to this course." });
    }

    const updated = await userCourse.update(
      { score: parseInt(currentCourse.score) + 1 },
      { where: { courseId: req.body.courseId, userId: userId } }
    );

    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
