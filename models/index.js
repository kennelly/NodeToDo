var mongoose = require("mongoose");

// sets debug to true so we can see whats going on
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api", {useNewUrlParser: true});

// tells mongoose we will use promises
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");