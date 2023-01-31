const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    url: {type: String, required: true},
    thumbnail: {type: String, required: true},
    feed: {type: String, required: true},
    feedIcon: {type: String, required: true},
}, {timestamps: true})

module.exports = mongoose.model('Content', contentSchema)