import express = require("express");
const BlogService = require('../services/blog.service');

/**
 * @info Create and Save a new Blog
 */
exports.create = async (req: express.Request, res: express.Response) => {

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
exports.findAll = async (req: express.Request, res: express.Response) => {
    try {
        const blogs = await BlogService.findAll();
        return res.status(200).json(blogs);
    } catch (err) {
        return res.status(404).send(err);
    }
};

// Find a single Blog with an id
exports.findOne = (req: express.Request, res: express.Response) => { };
// Update a Blog by the id in the request
exports.update = (req: express.Request, res: express.Response) => { };
// Delete a Blog with the specified id in the request
exports.delete = (req: express.Request, res: express.Response) => { };
// Delete all Blogs from the database.
exports.deleteAll = (req: express.Request, res: express.Response) => { };
// Find all published Blogs
exports.findAllPublished = (req: express.Request, res: express.Response) => { };