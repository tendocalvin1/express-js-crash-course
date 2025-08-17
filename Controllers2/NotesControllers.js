let notes = []


// @desc  get all notes
// @desc GET  '/api/notes'

export const getNotes = (req, res, next) =>{
    const limit = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(notes.slice(0, limit))
    }

    res.status(200).json(notes)
}


// @desc  get a single note
// @desc GET '/api/notes/:id'

export const getNote = (req, res, next) =>{
    const id = parseInt(req.params.id)
    const note = notes.find((note) => note.id === id)

    if(!note){
        throw new Error(`A note with an id of ${id} was not found unfortunately`)
        error.status(404)
        return next(error)

    }

    res.status(200).json(note)
}

  // @desc  Create a new note
// @route   POST /api/note/

export const createNote = (req, res, next) =>{
    console.log(req.body)
    const newNote = {
        id : notes.length + 1,
        title: req.body.title
    }

    if(!newNote.title){
        const error = new Error("Please include a title for the note you're creating")
        error.status(404)
        return next(error)
    }

    res.status(201).json(notes)
}

  // @desc  Update a note
// @route   PUT /api/note/

export const updateNote = (req, res, next) =>{
    const id = parseInt(req.params.id)
    const note = notes.find((note) => note.id === id)

    if(!post){
        return res.status(404).json({message : `A note with an id of ${id} was not found`})
    }

    post.title = req.body.title
    res.status(200).json(notes)
}


  // @desc  Delete a note
// @route   DELETE /api/note/:id

const deleteNote = (req, res ,next) =>{
    const id = parseInt(req.params.id)
    const note = notes.find((note)=> note.id === id)

    if(!note){
        return res.status(404).json({message: `A note with the id of ${id} was not found`})
    }

    notes = notes.filter((note) => note.id !== id)
    res.status(200).json(notes)
}
