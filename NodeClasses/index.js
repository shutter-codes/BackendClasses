var express = require('express');
const app = express();

// middleware for the root page
app.use(function(req, res, next) { 
    console.log("A new request received at port of root page " + Date.now());
    next();
});

// root page router
app.get('/', function(req, res) {
    res.send('Hello World!');
    console.log(res);
});

// middleware for the home page
// app.use(function(req, res, next) { 
//     console.log("A new request received at port of home page " + Date.now());
//     next(); 
// });

// // home page router
// app.get('/home', function(req, res) {
//     res.send('Hello naitik welcome to home page!');
// }); 

// // middleware for the cart page 
// app.use(function(req, res, next) { 
//     console.log("A new request received at cart page " + Date.now());
//     next();
// });

// //  cart page router
// app.get('/cart', function(req, res) {
//     res.send('Hello naitik welcome to cart page!');
// });  


// dynamic routing

app.get('/users/:username', function(req, res) {
    res.send('Hello ' + req.params.username);
});








// server listener
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

// ******** middleware will call the ROUTES after executing code of middleware above the hitted route.******