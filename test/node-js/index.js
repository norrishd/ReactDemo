const http = require('http')
const fs = require('fs')
const dt = require('./time')

/** 
 * Create a server object
 * @param {http.IncomingMessage object} req - a request from the client
 * @param res - an object representing the resulting data
 */
server = http.createServer(function (req, res) {
  // read in a file
  fs.readFile('index.html', function(err, data) {
	if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("Oopsy-daisy, 404 Not Found");
    }
    // Status code 200 = OK. Tell browser to render as HTML
    res.writeHead(200, {'Content-Type': 'text/html'})
    // response to the client
    res.write(data)
    res.end()			// end the response
  })
})

server.listen(3000)
console.log('Listening on port 3000')
