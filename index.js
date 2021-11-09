const http = require('http');
const fs  =  require('fs');
const path = require('path')
const express = require('express')

const { Console } = require('console')

const port = process.env.PORT || 4000

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/'){
    const data =  fs.readFileSync(path.join(__dirname,'index.html'));
    res.end(data.toString())
    }
    else if(req.url == '/about'){
        res.end('<h2>About page</h2>')
    }else{
        res.statusCode = 404
        res.end('<h2>Page Not Found</h2>')
    }
});

server.listen(port,()=>{
    console.log('Server is Up and running: '+port)
});