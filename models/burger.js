// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne(burgerName, cb) {
    orm.insertOne("burgers", "burger_name", burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(val, burgerId, cb) {
    orm.updateOne("burgers", "devoured", val, `id=${burgerId}`, function(res) {
      cb(res);
    });
  }
}

// Export the database functions for the controller (burgerssController.js).
module.exports = burger;
