
const express = require('express')
const path = require('path')
const PORT = process.env.PORT  || 8000


const app = express();

// setting up static folder that is the public folder
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
    {id : 1, title : 'post one'},
    {id : 2, title : 'post two'},
    {id : 3, title : 'post three'},

]
// Getting all posts
app.get('/api/posts', (req, res)=>{
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit)  && limit > 0){
        res.status(200).json(posts.slice(0, limit))
    }else{
    res.status(200).json(posts)
    }
})

// Getting a single post
app.get('/api/posts/:id', (req, res)=>{
   const id = parseInt(req.params.id);
   res.status(200).json(posts.filter((post)=> post.id === id))
})


// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });

// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','about.html'));
// });


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

