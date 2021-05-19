const bodyParser = require("body-parser")
const path = require('path');


module.exports = (app) => {
  
    // TODO add a rate limiter to this application 

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    //template setup

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../app/views'));
   
}