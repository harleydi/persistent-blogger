const express = require('express')
const router = express.Router()
const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../controller/authorController')


router.post('/new', createAuthor)
router.get('/all', getAllAuthors)
router.get('/auth/:id', getAuthorById)
router.put('/update/:id', updateAuthor)
router.delete('/delete/:id', deleteAuthor)

module.exports = router