import express from 'express'
import {getNotes,getNote,createNote,updateNote,deleteNote} from './Controllers2/NotesControllers.js'

const router = express.Router()

// route for getting all Notes
router.get('/', getNotes)

// route for getting one note
// Getting a single post GET request
// get method for acquiring the exact item that one wants
router.get('/:id', getNote)

// route for creating a new note
router.post('/', createNote)

// updating notes PUT request
// [ We normally use the put method]
router.put('/', updateNote)

// deleting notes DELETE request
// [ We normally use the DELETE method]
router.delete('/', deleteNote)