const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // solution 1 
    // fs.readFile('text-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // solution 2 
    // const readable = fs.createReadStream('text-file.txt');
    // readable.on('data', chuck => {
    //     res.write(chuck);
    // })
    // readable.on('end', () => {
    //     res.end();
    // })

    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // solution 3
    const readable = fs.createReadStream('text-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDestination)
});

server.listen(8000, 'localhost', () => console.log('server started'));