const express = require('express');
const app = express();
const path = require('path')
const publicPath = path.resolve(__dirname,'./public');
const homePath = path.resolve(__dirname,'./views/home.html');
const loginPath = path.resolve(__dirname,'./views/login.html');
const registerPath = path.resolve(__dirname,'./views/register.html');
const descriptionPath = path.resolve(__dirname,'./views/productDescription.html');
const carritoPath = path.resolve(__dirname,'./views/carrito.html');

app.listen(3000, function(){
    console.log("Server 3000 running");
});

app.use(express.static(publicPath));

app.get('/', function(req,res){
    res.sendFile(homePath);
});

app.get('/login', function(req,res){
    res.sendFile(loginPath);
});
app.get('/register', function(req,res){
    res.sendFile(registerPath);
});
app.get('/description', function(req,res){
    res.sendFile(descriptionPath);
});
app.get('/carrito', function(req,res){
    res.sendFile(carritoPath);
});