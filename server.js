
import express from 'express'
import path from 'path'
import http from 'http'
import {fileURLToPath} from 'url' 
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import NotFound from './middleware/NotFound.js'
const PORT = process.env.PORT  || 8000

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// logger middleware
app.use(logger)

// Routes
app.use('/api/posts', posts)

// setting up static folder that is the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname, 'public','index.html'));
 });

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public','about.html'));
 });

// Error Handler
app.use(NotFound)
app.use(errorHandler)





app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

