const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    validate: { allowNull: false, notEmpty: true },
  },

  description: {
    type: Sequelize.STRING,
  },

  imgurl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      defaultValue:
        "https://img.icons8.com/material-rounded/48/000000/nothing-found.png",
    },

    address: {
      type: Sequelize.STRING,
      validate: { allowNull: false, notEmpty: true },
    },
  },
});

module.exports = Campus;
