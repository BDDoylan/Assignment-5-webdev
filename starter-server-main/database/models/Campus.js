const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://img.icons8.com/material-rounded/48/000000/nothing-found.png",
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Campus;
