var db = require("../models")

exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
        console.log(err);
    })
};

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundToDo){
        res.json(foundToDo)
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.updateTodo = function(req, res){
    // new:true makes sure that the new data we are passing gets displayed
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true})
    .then(function(todo){
        res.json(todo)
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.deleteTodo = function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.send("deleted")
    })
    .catch(function(err){
        res.send(err);
    })
};

module.exports = exports