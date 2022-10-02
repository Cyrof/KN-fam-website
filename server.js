// fam website deployed to heroku 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000

// set engine to view ejs
app.set('view engine', 'ejs')

// set app static folder path
app.use(express.static(__dirname + "/public"));

// route to login page
app.get('/', (req, res) => {
    res.render('pages/login');
});

// create which port website will run on 
app.listen(port, () =>{
    console.log(`App listening on ${port}`);
});

