const Content = require('../models/contentModel')
const mongoose = require('mongoose')

// Get All content
const getFeed = async (req, res) => {
    const content = await Content.find({}).sort({createdAt: -1})

    res.status(200).json(content)
}

// Get Single Content
const getContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such content with id ' + id})
    }
    const content = await Content.findById(id)

    if(!content){
        return res.status(404).json({error: 'No such content'})
    }

    res.status(200).json(content)
}

// Create new content
const createContent = async (req, res) => {
    const {title, body, url} = req.body
    // Add doc to DB
    try{
        const content = await Content.create({title,body,url})
        res.status(200).json(content)
        //({mssg: 'GET a single content'})
    } catch (error){
        res.status(400).json({error: error.message})
    }
} 
// Delete content
const deleteContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such content with id ' + id})
    }

    const content = await Content.deleteOne({_id: id})

    if(!content){
        return res.status(404).json({error: 'No such content'})
    }

    res.status(200).json(content)
}


// Update Content
const updateContent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such content with id ' + id})
    }

    const content = await Content.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!content){
        return res.status(404).json({error: 'No such content'})
    }

    res.status(200).json(content)

}

module.exports = {
    getFeed,
    getContent,
    createContent,
    updateContent,
    deleteContent
}