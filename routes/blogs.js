const express = require('express')
const { createBlog, getAllBlogs, getBlogById, updateBlogs, deleteBlog } = require('../controller/blogController')
const router = express.Router()

router.post('/new', createBlog)
router.get('/all', getAllBlogs)
router.get('/blog/:id', getBlogById)
router.put('/update/:id', updateBlogs)
router.delete('/delete/:id', deleteBlog)

module.exports = router