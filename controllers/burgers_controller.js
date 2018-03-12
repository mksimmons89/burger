var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// route to sanity check that a basic 'get' is working
router.get("/", function(req, res) {
  res.send("Hola, friends!");
});

// api route to show all burgers
router.get("/api/burger", function(req, res) {
	burger.selectAll(function(data) {
		res.json(data);
	});
});

// front end route to pass burgers into handlebars... only 1/4 wired up
router.get("/burger", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", { burger: data });
	});
});

// post route (can be tested in postman)
router.post("/api/burger", function(req, res) {
  console.log(req.body);
  burger.insert1("burger_name", [req.body.burger_name], function(result) {
		console.log(result);
		res.redirect("/");
	})
});
module.exports = router;
