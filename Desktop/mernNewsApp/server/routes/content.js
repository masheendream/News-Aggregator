const express = require('express')
const Content = require('../models/contentModel')
const {
    getFeed,
    getContent,
    createContent,
    updateContent,
    deleteContent
} = require('../controllers/content')

const router = express.Router()
// Get All Content
router.get('/', getFeed)

// Get single content
router.get('/:id', getContent)

// POST Content
router.post('/', createContent)

//DELETE
router.delete('/:id', deleteContent)

//Update
router.patch('/:id', updateContent)

module.exports = router