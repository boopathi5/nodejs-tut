
const http = require('http');
const port = 5000; // Define the port

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the server');
        return;
    }
    if (req.url === '/about') {
        res.end('here is the short description');
        return;
    }
    res.end(`
    <h1>oops!</h1>
    <p> We cant seem to be able to find this page on the server</p>
    <a href ="/">back to the homepage</a>
    `);
})

server.listen(port, () => {
    console.log(`listening on port ${port}`); // Use template literals to include the port variable
})

