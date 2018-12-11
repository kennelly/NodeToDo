var express     = require("express"),
    app         = express(),
    port        = process.env.PORT,
    //body parser allows us to take whats coming in a request and put it into an object
    bodyParser  = require("body-parser");
    
//will require the exports of that route
var todoRoutes = require("./routes/todos");
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//dirname will always use whatever directory we start the server in
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile("index.html")
});

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, function(){
    console.log("app is running on " + process.env.PORT)
})