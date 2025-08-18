let posts = [
    {id : 1, title : 'post one'},
    {id : 2, title : 'post two'},
    {id : 3, title : 'post three'},

]

// @desc Get all posts
// @route GET /api/posts

export const getPosts =  (req, res, next)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit)  && limit > 0){
    return res.status(200).json(posts.slice(0, limit))
    }
    
    res.status(200).json(posts)
    
}

 // @desc Get a single post
// @route GET /api/posts/:id

export const getPost =  (req, res, next)=>{
    const id = parseInt(req.params.id); 
    const post = posts.find((post) => post.id === id)
 
    if(!post){
     const error = new Error(`A post with the id of ${id} was not found`)
     error.status = 404
     return next(error)
    }
 
     res.status(200).json(post)
    
 }

  // @desc  Create a new post
// @route   POST /api/post/

export const createPost =  (req, res, next) =>{
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

    /* `posts.push(newPost);` is adding a new post object to the `posts` array. It creates a new post
    object with an `id` that is one greater than the last post in the array and a `title` that is
    taken from the request body. This new post object is then added to the `posts` array using the
    `push` method. */
    posts.push(newPost);
    res.status(201).json(posts)
}


  // @desc  Update a post
// @route   PUT /api/post/:id
export const updatePost =  (req, res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: `A post with the id of ${id} was not found`})
       }
       post.title = req.body.title
        res.status(200).json(posts)
    }


  // @desc  Delete a post
// @route   DELETE /api/post/:id
export const deletePost = (req, res, next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id === id)

    if(!post){
        return res.status(404).json({message: `A post with the id of ${id} was not found`})
       }
       posts = posts.filter((post) =>(post.id !== id))
        res.status(200).json(posts)
    }