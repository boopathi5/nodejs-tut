const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page already')
    }
    if (req.url === '/about') {
        // BLOCKING CODE !!!
        for (let i = 0; i < 100; i++){
            for (let j = 0; j < 100; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page already')
    }
    res.end('Error page already')
    });

server.listen(3000, () => {
    console.log('Server running on port 3000');
});