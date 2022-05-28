const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    let siteName = './abc.html';

    switch(req.url){
        case '/about':
            res.statusCode = 200;
            siteName = './about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        case '/home':
            res.statusCode = 200;
            siteName = './abc.html';
            break;
        default:
            res.statusCode = 404;
            siteName = './error.html';
            break;
    }

    console.log("Server!!");
    fs.readFile(siteName, (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
        }
        res.end();
    })
});

server.listen(3000, 'localhost',()=>{
    console.log("Listening on 3000");
});