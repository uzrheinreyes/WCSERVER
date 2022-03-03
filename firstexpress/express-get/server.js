/**
 * Name: Uzrhein M. Reyes
 * App Name: server.js
 * Description: This program uses GET method to get requests from and display 'index.html'
 */

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res) {
    // Prepare output for JSON file
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        course:req.query.course,
        age:req.query.age,
        comments:req.query.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening to at http://%s:%s", host, port)
})