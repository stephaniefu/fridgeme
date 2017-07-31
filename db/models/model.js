const Sequelize = require('sequelize');
const db = require('../index');

const Food = db.define('foods', {
  item: {
    type: Sequelize.STRING
  },
  expiration: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
})

Food.sync();

module.exports = Food;