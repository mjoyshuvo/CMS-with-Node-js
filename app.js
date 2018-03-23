const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');


//--------connect to database with mongoose--------------------
mongoose.connect('mongodb://localhost:27017/node_cms').then(db => {
    console.log('---------mongo connected--------');
}).catch(error => console.log("could not connect", error));

app.use(express.static(path.join(__dirname, 'public'))); //-----static files-----

//-------set view engine---------
app.engine('handlebars', exphbs({ defaultLayout: 'home' }));
app.set('view engine', 'handlebars');


//-------load routes-----------
const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

//-------use routes-------------
app.use('/', home); //---route middleware for home----
app.use('/admin', admin); //------route middleware for admin------
app.use('/admin/posts', posts); //------route middleware for posts------

app.listen(4500, () => {
    console.log('-----listening on port--------');
});