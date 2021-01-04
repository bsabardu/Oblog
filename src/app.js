const express = require('express');
const app = express();
const port = 3000;

//Import Router
const router = require('./router');

//Handle Statics
app.use(express.static( __dirname + '/publics'));

//Handle EJS and views folder
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Router Middleware
app.use(router);

app.listen(port, () => {
    console.log(`Listening to ${port}`)
});