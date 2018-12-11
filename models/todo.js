var mongoose = require("mongoose");

//create a schema 
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: "Name cannot be blank"
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

// compile that schema into a model
var Todo = mongoose.model("Todo", todoSchema);

//when we require todos.js, it will actually give the model of todo
module.exports = Todo;
