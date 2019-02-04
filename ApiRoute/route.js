const express = require('express');
const router = express.Router();
const Movie = require('../ApiModel/api');

router.get('/findmovie/:name', function(req,res){
    Movie.findOne({name:req.params.name}).then(function(movies){
        res.send(movies);
    })
});




router.get('/allmovies', function(req,res){
    Movie.find({}).then(function(movies){
        res.send(movies);
    })
});

router.post('/add', function(req,res,next){
    Movie.create(req.body).then(function(movie){
        res.send(movie);
    }).catch(next);
})


router.put('/update/:id', function(req, res, next){
    Movie.findOneAndUpdate({_id: req.params.id}, req.body).then(function(){
        Movie.findOne({_id: req.params.id}).then(function(movie){
            res.send(movie);
        });
    }).catch(next);
});



router.delete('/delete/:id', function(req, res, next){
    Movie.findOneAndDelete({_id: req.params.id}).then(function(movie){
        res.send(movie);
    }).catch(next);
});

module.exports = router;