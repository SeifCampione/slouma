const { where } = require("sequelize");
const sequelize = require("../Config/dbConfig");
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const ListUsers = await user.findAll({
      where: { userName: req.body.userName },
    });

    if (ListUsers.length > 0) {
      return res
        .status(400)
        .json({ msg: "user already exist Login should be unique" });
    }

    // hash the password
    const hashedpassword = await bcrypt.hashSync(req.body.userPassword, salt);
    const newUser = await user.create({
      userName: req.body.userName,
      userMail: req.body.userMail,
      userPassword: hashedpassword,
      userRole: req.body.userRole,
    });
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.login = async (req, res) => {
  try {
    const searchUser = await user.findAll({
      where: { userMail: req.body.userMail },
    });

    if (searchUser.length == 0) {
      return res.status(400).json({ msg: "Login ou mot de passe incorrecte" });
    }
    const foundPassword = await user.findAll({
      where: { userMail: req.body.userMail },
    });
    const compare = await bcrypt.compare(
      req.body.userPassword,
      foundPassword[0].userPassword
    );
    if (!compare) {
      return res.status(400).json({ msg: "Login ou mot de passe incorrecte" });
    }
    // else create a key
    const searchedAdmin = searchUser[0];

    const token = jwt.sign({ id: searchedAdmin.id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    return res
      .status(200)
      .send({ msg: "Connected successfully", token, searchedAdmin });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.findAllUsers = async (req, res) => {
  try {
    const users = await user.findAll({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const users = await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send("deleted");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const ListUsers = await user.findAll({
      where: { id: req.params.id },
    });

    if (ListUsers.length == 0) {
      return res.status(400).json({ msg: "user not found" });
    }
    const verifyUserName = await user.findAll({
      where: { userName: req.body.userName },
    });
    if (verifyUserName.length > 0) {
      return res.status(400).json({ msg: "userName already in use" });
    }

    // hash the password
    if (req.body.userPassword) {
      const hashedpassword = await bcrypt.hashSync(req.body.userPassword, salt);
      const newUser = await user.update(
        {
          userName: req.body.userName,
          userPassword: hashedpassword,
          userRole: req.body.userRole,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    } else {
      const newUser = await user.update(
        {
          userName: req.body.userName,
          userRole: req.body.userRole,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    }

    res.status(200).send("updated successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
exports.getCurrent = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const decodedToken = jwt.verify(authorization, process.env.SECRET_KEY);
    const userId = decodedToken.id;

    const users = await user.findAll({
      where: { id: userId },
      attributes: {
        exclude: ["userPassword", "id"],
      },
    });
    res.status(200).send(users[0]);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
