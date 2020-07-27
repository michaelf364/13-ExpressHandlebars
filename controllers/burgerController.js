const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
      const hbsObject = {
          burgers: data
      };
      res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function(result) {
    //send back id of inserted burger
      res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.body.devoured, req.params.id, function(result) {
      if (result.changedRows == 0) {
          return res.status(404).end();
      } else {
        //sends success if something changes
          res.status(200).end();
      }
  });
});


// Export routes for server.js to use.
module.exports = router;
