const express = require('express');
const port = 2000;
const app = express();
const middleware = require('./middleWare/middle');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', middleware, (req, res) => {
    res.render('index'); 
});
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server started on port ${port}...`);
    }
});
