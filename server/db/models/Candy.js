const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg",
  },
});
