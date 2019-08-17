const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();




myEmitter.on('newSale', () => console.log('There was a new sale'));

myEmitter.on('newSale', () => console.log('Customer name: Moises'));

myEmitter.on('newSale', (stock) => console.log(`Ther are now ${stock} in stock`));


myEmitter.emit('newSale', 9);

////////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request Received');
    console.log(req.url);
    res.end('Request Received');
});

server.on('request', (req, res) => {
    console.log('Another Request Received');
});

server.on('close', (req, res) => {
    console.log('close sever');
});

server.listen(8000, 'localhost', () => console.log('Waiting for requrest...'));