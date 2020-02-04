const express = require("express");
const fs = require("fs");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'))

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//Routes

app.get("/notes", function(req, res) {
    // var data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
// put /* at bottom
  
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/Develop/journal.json"));
  });

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  //Post

//   app.post("/api/notes", function(req, res) {

//   }

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  
