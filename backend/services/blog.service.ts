const Blog = require('../models/blog.model');

exports.create = async(blog: any) => {
    return new Blog(blog).save();
};

exports.findAll = async() => {
    return Blog.find().sort({ createdAt: -1 });
};