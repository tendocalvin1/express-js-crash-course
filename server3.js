import {fileURLToPath} from 'url'
import express from 'express'
import http from 'http'
import path from 'path'

const PORT = process.env.PORT

const app = express();

// Getting the directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// setting up static files in the static folder using express.static
app.use(express.static(path.join(__dirname, 'Public3')))


