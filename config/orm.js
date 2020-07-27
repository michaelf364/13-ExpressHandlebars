// Import MySQL connection.
const connection = require("./connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll: function (table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (table, col, val, cb) {
    const queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (?);`;
    connection.query(queryString, val, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function (table, col, val, condition, cb) {
    const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE ${condition};`;
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;
