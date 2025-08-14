
import express from 'express'
import path from 'path'
import http from 'http'
import posts from './routes/posts.js'

const PORT = process.env.PORT  || 8000


const app = express();

// Routes
app.use('/api/posts', posts)

// setting up static folder that is the public folder
// app.use(express.static(path.join(__dirname, 'public')))



// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','index.html'));
// });

// app.get('/about', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public','about.html'));
// });


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

