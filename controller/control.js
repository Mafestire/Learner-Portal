//--MODULES--
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
//--MODELS
const {User, Product, Admin} = require('../model');
//--instamces
const user = new User();
const product = new Product();
const admin = new Admin();

//GET HOME
route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
});

//USERS
            //--get users & single user
route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});
route.get('/user/:id', (req, res) => {
    user.fetchUser(req, res)
});
            //--register user
route.post('/register', bodyParser.json(), (req, res) => {
    user.createUser(req, res);
});
            //--user login
route.post('/login', bodyParser.json(), (req, res) =>{
    user.login(req, res);
});
            //--forgot password
route.put('/reset-pass/user:/id', bodyParser.json(), (req, res) =>{
    user.forgotPass(req, res);
});

//Admin
            //--get admin & single admin
route.get('/admins', (req, res) => {
    admin.fetchAdmins(req, res);
});
route.get('/admin/:id', (req, res) => {
    admin.fetchAdmin(req, res)
});
            //--register admin
route.post('/register-admin', bodyParser.json(), (req, res) => {
    admin.createAdmin(req, res);
});
            //--user login
route.post('/login-admin', bodyParser.json(), (req, res) =>{
    admin.loginAdmin(req, res);
});
            //--forgot password
route.put('/reset-pass/admin:/id', bodyParser.json(), (req, res) =>{
    admin.forgotPass(req, res);
});

//Products
        //--get all products & single product
route.get('/products', (req, res) => {
    product.fetchProducts(req, res);
});
route.get('/product/:id', (req, res) => {
    product.fetchProduct(req, res);
});
//add new product
route.post('/product', bodyParser.json(), (req, res) => {
    product.addProduct(req, res);
});
//update product
route.put('/product/:id', bodyParser.json(), (req, res) => {
    product.updateProduct(req, res);
});
//delete product
route.delete('/product/:id', bodyParser.json(), (req, res) => {
    product.deleteProduct(req, res);
});

module.exports = route;
