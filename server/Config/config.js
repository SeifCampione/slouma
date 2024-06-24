require("dotenv").config();

const sequlize_cli = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mssql",
  },
  test: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mssql",
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "mssql",
  },
};

module.exports = sequlize_cli;
