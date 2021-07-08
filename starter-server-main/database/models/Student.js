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
    validate: { allowNull: false, notEmpty: true, isEmail: true },
  },

  imageurl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      defaultValue:
        "https://img.icons8.com/material-rounded/48/000000/nothing-found.png",
    },
  },

  gpa: {
    type: Sequelize.STRING,
    validate: { isDecimal: true, min: 0.0, max: 4.0 },
  },
});

module.exports = Student;
