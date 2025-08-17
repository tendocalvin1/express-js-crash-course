import {fileURLToPath} from 'url'
import express from 'express'
import http from 'http'
import path from 'path'
import errorHandler1 from './Middleware1/error1.js';
import logger1 from './Middleware1/logger1.js';
import NotFound1 from './Middleware1/NotFound1.js'


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
app.use(errorHandler1)
app.use(NotFound1)
