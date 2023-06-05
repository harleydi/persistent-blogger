const Author = require('../model/Author')


const createAuthor = async (req, res) => {
    try {
        const newAuthor = await new Author(req.body)
        const savedAuthor = await newAuthor.save()
        res.status(200).json({ success: true, data: savedAuthor })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find({})
        res.status(200).json({ success: true, data: authors })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const getAuthorById = async (req, res) => {
    try {
        const author = await Author.find({ _id: req.params.id })
        res.status(200).json({ success: true, data: savedAuthor })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findOneAndUpdate({ _id: req.params.id })
        res.status(200).json({ success: true, data: savedAuthor })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const deleteAuthor = async (req, res) => {
    try {
        const deleted = await new Author.findOneAndDelete({ _id: id })
        res.status(200).json({ success: true, data: savedAuthor })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}


module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}