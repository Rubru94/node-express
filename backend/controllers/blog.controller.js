const BlogService = require('../services/blog.service');

/**
 * @info Create and Save a new Blog
 */
exports.create = async(req, res) => {

    try {
        const blog = await BlogService.create(req.body);
        return res.status(201).json(blog);
    } catch (err) {
        return res.status(404).send(err);
    }
};

/**
 * @info Retrieve all Blogs from the database
 */
exports.findAll = async(req, res) => {
    try {
        const blogs = await BlogService.findAll();
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