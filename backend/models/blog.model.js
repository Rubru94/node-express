const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);