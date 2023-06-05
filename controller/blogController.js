const Blog = require('../model/Blog')

// createBlog, this function should create a new blog.
const createBlog = async (req, res) => {
    try {
        const newBlog = await new Blog(req.body)
        const savedBlog = await newBlog.save()
        res.status(200).json({ success: true, data: savedBlog })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
// getAllBlogs, this function should return all blogs.
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.status(200).json({ success: true, data: blogs })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
// getBlogById, this function returns one blog by id. If blog is not found, respond with a 400 and a message.
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.find({ _id: req.params.id })
        if (blog.length === 0) {
            res.status(400).json({ success: false, message: "Blog not found"})
        }
        res.status(200).json({ success: true, data: blog })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
// updateBlogById, this function updates a blog by id. If blog is not found, respond with a 400 and a message.
const updateBlogs = async (req, res) => {
    try {
        const updatedBlog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body )
        if (updatedBlog.length === 0) {
            res.status(400).json({ success: false, message: "Blog not found"})
        }
        res.status(200).json({ success: true, data: updatedBlog })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
// deleteBlogById, this function should delete one blog. If blog is not found, respond with a 400 and a message
const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ success: true, data: deletedBlog })
    } catch (error) {
        res.status(400).json({ success: false, message: "Blog not found" })
    }
}


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlogs,
    deleteBlog
}