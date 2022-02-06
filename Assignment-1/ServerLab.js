var http = require('http');     
var server = http.createServer(function (req, res) {
    
    if (req.url == '/') {       // Check the URL of the current request

        // Call function
        var root = require('./root');
        var root_obj = new root('John Smith');

        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});

        // Set response content
        res.write('<html><body><h1>Welcome to my Node.js Application</h1></body></html>');
        res.write(root_obj.fullmessage());
        res.end();
    }

    else if (req.url == '/about') {

        var about = require('./about');
        var about_obj = new about('John Smith');

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is the About Page</h1></body></html>');
        res.write(about_obj.fullmessage());
        res.end();
    }

    else if (req.url == '/contact') {

        var contact = require('./contact');
        var contact_obj = new contact('John Smith');

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is the Contact Page</h1></body></html>');
        res.write(contact_obj.fullmessage());
        res.end();
    }

    else if (req.url == '/gallery') {

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();
    }

    else {
        res.end('Invalid Request!');
    }

});

server.listen(8000);    // Listen for any incoming requests.
console.log('Node.js web server at port 8000 is running...')

/**
 * NAME    : Uzrhein M. Reyes
 * DATE    : February 2, 2022
 * SECTION : WD-201
 */