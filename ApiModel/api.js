const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Movie name is required']
    },
    genre:{
        type: String,
        required: false,
        default: 'drama'
    },
    production_year:{
        type: Number,
        maxlength : 4,
    },
    actors : {
        type: [String]
    }
})

const Movie = mongoose.model('movie', MovieSchema);
module.exports = Movie;