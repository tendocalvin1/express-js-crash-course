import express from 'express'
import {getPosts, getPost, createPost, updatePost, deletePost}  from '../controlllers/PostControllers.js'

const router = express.Router()

// Getting all posts
router.get('/', getPosts)

// Getting a single post GET request
// get method for acquiring the exact item that one wants
router.get('/:id', getPost)

// creating a new post
// post method for creating something new POST request
router.post('/',createPost)

// updating posts PUT request
// [ We normally use the put method]
router.put('/:id', updatePost)


// Delete post
// we use the delete request
router.delete('/:id', deletePost)


export default router