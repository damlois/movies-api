const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./ApiRoute/route');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://loism:pass123@ds139919.mlab.com:39919/moviesdb', { useNewUrlParser: true, useCreateIndex: true}
 );

 app.use(bodyParser.json());
 app.use('/movies', router);
 app.use(function(err,req,res,next){
    
    res.status(404).send({error: err.message})
});


app.listen(port, ()=>{
    console.log('i am listening on port ' + port)
});