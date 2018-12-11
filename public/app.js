// anything in that function will wait to run until the DOM has loaded
$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)
    
    $("#todoInput").keypress(function(event){
        if(event.which == 13){
            //create todo
            createTodo();
        }
    })
    
    $(".list").on("click", "li", function(){
        updateTodo($(this));
    })
    
    $(".list").on("click", "span", function(e){
        // stops the event from bubbling up to the next event of clicking on the whole li
        e.stopPropagation();
        removeTodo($(this).parent())
    })
});

function addTodos(todos){
    todos.forEach(function(todo){
        addTodo(todo);
    })

};

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
    
}

function createTodo(){
    //send request to create todo
    var usrInput = $("#todoInput").val();
    $.post("/api/todos", {name:usrInput})
    .then(function(newTodo){
        $("#todoInput").val("");
        addTodo(newTodo)
    })
    .catch(function(err){
        console.log(err)
    })
}


function removeTodo(todo){
    var clickedId = todo.data("id");
    var deleteUrl = "/api/todos/" + clickedId;
    $.ajax({
        method: "DELETE",
        url: deleteUrl
    })
    .then(function(data){
        todo.remove();
    })
}

function updateTodo(todo){
    var updateUrl = "/api/todos/" + todo.data("id");
    var isDone = !todo.data("completed");
    var updateData = {completed: isDone};
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass("done");
        todo.data("completed", isDone)
    })
}