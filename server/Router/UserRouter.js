const express = require("express");
const {
  createUser,
  login,
  findAllUsers,
  deleteUser,
  updateUser,
  getCurrent,
} = require("../Controller/UserController");
const UserRouter = express.Router();

UserRouter.post("/", createUser);
UserRouter.get("/", findAllUsers);
UserRouter.post("/login", login);
UserRouter.delete("/:id", deleteUser);
UserRouter.put("/:id", updateUser);
UserRouter.get("/current", getCurrent);

module.exports = UserRouter;
