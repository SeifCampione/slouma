const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    instancename: "DEV-WEb",
    port: 1433,
    dialect: "mssql",
    connectionTimeout: 150000,

    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    logging: false,
  }
);
module.exports = sequelize;
