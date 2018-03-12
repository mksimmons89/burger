// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert1: function(cols, vals, cb) {
    orm.insert1("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update1: function(objColVals, condition, cb) {
    orm.update1("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
