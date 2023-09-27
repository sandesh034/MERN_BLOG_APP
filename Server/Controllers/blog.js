const express = require('express')
const router = express.Router();


const blogModel = require('../Models/blogModel')
const userModel = require('../Models/userModel')


const createBlog = async (req, res) => {
    try {
        const { title, description, image, paragraph } = req.body
        const newBlog = new blogModel({ title, description, image, paragraph, owner: req.userId })
        await newBlog.save()

        const user = await userModel.findById(req.userId)
        if (!user) {
            res.status(400).json({ 'message': 'User not found' })
        }
        else {
            user.blogs.push(newBlog._id)
            await user.save()
            res.status(400).json({ 'message': 'Blog Post Created Successfully' })
        }

    }
    catch (error) {
        console.log(error)
    }
}
const getBlogById = async (req, res) => {
    const blogId = req.params.id
    try {
        const blog = await blogModel.findById(blogId)
        if (!blog) {
            return (res.status(400).json({ 'message': 'Blog post not found' }))
        }
        res.status(400).json(blog)
    } catch (error) {
        console.log(error)
    }
}
const updateBlog = async (req, res) => {
    try {
        const { title, description, image, paragraph } = req.body
        const updatedBlog = await blogModel.findByIdAndUpdate(req.params.id,
            { title, description, image, paragraph },
            { new: true }
        )
        if (!updatedBlog) {
            return (res.status(400).json({ 'message': 'Blog post not updated' }))
        }
        else {
            res.status(400).json({ 'message': 'Blog post updated successfully' })
        }


    } catch (error) {
        console.log(error)
    }

}

const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await blogModel.findByIdAndRemove(req.params.id)
        if (!deletedBlog) {
            return (res.status(200).json({ 'message': 'Blog post not deleted' }))
        }
        else {
            res.status(200).json({ 'message': 'Blog post deleted successfully' })
            const user = await userModel.findById(req.params.id)
            const blogIndex = user.blogs.indexOf(req.params.id)
            if (blogIndex != -1) {
                user.blogs.splice(blogIndex, 1);
                await user.save()
            }

        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = { createBlog, getBlogById, updateBlog, deleteBlog }