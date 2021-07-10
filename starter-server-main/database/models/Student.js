const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "N/A",
    isEmail: true,
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img.icons8.com/material-rounded/48/000000/nothing-found.png",
    validate: {
      isUrl: true,
    },
  },

  gpa: {
    type: Sequelize.STRING,
    defaultValue: "N/A",
    isDecimal: true,
    validate: {min: 0.0, max: 4.0 },
  },
});

module.exports = Student;
