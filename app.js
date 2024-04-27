// //menggunakan require untuk load module. hanya bisa di nodejs
const helpers = require('./helpers');
const total = helpers.sum(2,2);

//cara membuat server local
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("hello world from node js");
})

server.listen(3000);

//object destruction
//kita bisa pakai fungsi secara langsung dari module dengan cara:
const {sum} = require('./helpers');
// const total = sum(2,2);


console.log("total = ", total);