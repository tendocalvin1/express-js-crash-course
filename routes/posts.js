import express from 'express'

const router = express.Router()

let posts = [
    {id : 1, title : 'post one'},
    {id : 2, title : 'post two'},
    {id : 3, title : 'post three'},

]



// Getting all posts
router.get('/',(req, res, next)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit)  && limit > 0){
    return res.status(200).json(posts.slice(0, limit))
    }
    
    res.status(200).json(posts)
    
})

// Getting a single post GET request
// get method for acquiring the exact item that one wants
router.get('/:id', (req, res, next)=>{
   const id = parseInt(req.params.id); 
   const post = posts.find((post) => post.id === id)

   if(!post){
    const error = new Error(`A post with the id of ${id} was not found`)
    error.status = 404
    return next(error)
   }

    res.status(200).json(post)
   
})

// creating a new post
// post method for creating something new POST request
router.post('/', (req, res, next) =>{
    console.log(req.body)
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }; 

    if(!newPost.title){
       const error = new Error({message: "Please include a title"})
       error.status = 400;
       return next(error)
    }

    posts.push(newPost);
    res.status(201).json(posts)
})

// updating posts PUT request
// [ We normally use the put method]
router.put('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: `A post with the id of ${id} was not found`})
       }
       post.title = req.body.title
        res.status(200).json(posts)
    })


// Delete post
// we use the delete request
router.delete('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: `A post with the id of ${id} was not found`})
       }
       posts = posts.filter((post) =>(post.id !== id))
        res.status(200).json(posts)
    })


export default router