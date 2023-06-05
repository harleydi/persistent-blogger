const mongoose = require('mongoose')
const { v4: uuid } = require('uuid');

const blogSchema = new mongoose.Schema({
    _id: { type: String, default: () => uuid()},
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, ref: 'Author' },
    lastModified: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog