var express = require("express");
//gives us a variable to use to reach all the routes we have broken up
var router  = express.Router();
// automatically requires the index.js file with our models
var db      = require("../models");
var helpers = require("../helpers/todos")

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo)
    
router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)



module.exports = router;