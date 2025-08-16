import express from 'express'
import http from 'http'
import path from 'path'
import {fileURLToPath} from 'url'

const PORT = process.env.PORT

const app = express();

// Getting the directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

// setting up static files
app.use(express.static(path.join(__dirname, 'Public2')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Public2', 'index.html'))
})


app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Public2', 'about.html'))
})


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));