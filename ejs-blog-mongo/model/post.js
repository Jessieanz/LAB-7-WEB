let mongoose = require("mongoose")
let Schema = mongoose.Schema

let PostSchema = Schema({
    title: String,
    author: String,
    post_date: {
        type: Date,
        default: Date.now
    },
    post_data: String

})

// Para exportar la info a una db llamada 'Posts'
module.exports = mongoose.model('posts', PostSchema)