const http = require('http');
const fs  =  require('fs');
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.statusCode = 200
    res.end('<h1>Express Home Page</h1>')
})
app.get('/about',(req,res)=>{
    res.statusCode = 200
    res.end('<h1>Express About Page</h1>')
})

app.get('*',(req,res)=>{
    res.statusCode = 404
    res.end('<h1>Page not Found</h1>')
})

app.listen(port,()=>{
    console.log('Express Server is up and running: '+(port))
})