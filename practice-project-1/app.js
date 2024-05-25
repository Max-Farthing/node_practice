const http = require('http');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Username</button></form></body>')
        res.write('</html>');
        return res.end();
    } 
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<ul><li>User 1</li><li>User 2</li></ul>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    res.write('<html>');
    res.write('<h1>Hello World</h1>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);