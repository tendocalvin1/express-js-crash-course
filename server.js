
const express = require('express')
const path = require('path')


const app = express();

// setting up static folder that is the public folder
// app.use(express.static(path.join(__dirname, 'public')))

let posts = [
    {id : 1, title : 'post one'},
    {id : 2, title : 'post two'},
    {id : 3, title : 'post three'},

]

app.get('/api/posts', (req, res)=>{
    res.json(posts)
})


// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });

// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','about.html'));
// });


app.listen(8000, ()=> console.log(`Server is running on port 8000`));

