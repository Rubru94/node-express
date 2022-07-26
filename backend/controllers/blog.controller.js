const Blog = require('../models/blog.model');

// Create and Save a new Blog
exports.create = async(req, res) => {

    try {

        const blog = new Blog(req.body);
        await new Blog(blog).save();
        return res.status(201).json(blog);

    } catch (err) {
        return res.status(404).send(err);
    }
};

// Retrieve all Blogs from the database.
exports.findAll = async(req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        return res.status(200).json(blogs);
    } catch (err) {
        return res.status(404).send(err);
    }
};

// Find a single Blog with an id
exports.findOne = (req, res) => {};
// Update a Blog by the id in the request
exports.update = (req, res) => {};
// Delete a Blog with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Blogs from the database.
exports.deleteAll = (req, res) => {};
// Find all published Blogs
exports.findAllPublished = (req, res) => {};