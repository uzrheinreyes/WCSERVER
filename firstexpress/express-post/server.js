/**
 * Name: Uzrhein M. Reyes
 * App Name: server.js
 * Description: This program uses the POST method to display user input boxes
 */

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

// Create application /x-www-form-urlencoded-parser
var urlencodedParser = bodyparser.urlencoded({extended:false})

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res) {
    // Prepare output for JSON file
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        course:req.query.course,
        age:req.query.age,
        comments:req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

var server = app.listen(5000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening to at http://%s:%s", host, port)
})