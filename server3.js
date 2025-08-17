import {fileURLToPath} from 'url'
import express from 'express'
import http from 'http'
import path from 'path'
import {} from './Controllers2/NotesControllers.js'

const PORT = process.env.PORT

const app = express();

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// logger middleware
app.use(logger1)

// Routes
app.use('/api/notes', notes)

// Getting the directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// setting up static files in the static folder using express.static
app.use(express.static(path.join(__dirname, 'Public3')))


// Error handling
app.use(errorHandler)
app.use(NotFound1)
