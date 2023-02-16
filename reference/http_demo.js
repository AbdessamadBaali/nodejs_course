const http = require('http');

// Create server object
http.createServer((rep, res) => {
    // Write response
    res.write('Hello World');
    res.end()
}).listen(4000, () => console.log('Server runing..'))