const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = 3000

const notes = []

app.post('/notes/add', (req, res) => {
    let reqBody = req.body
   console.log("req body", reqBody)
   let {noteData} = reqBody
   notes.push(noteData)
    res.status(201).json({data:notes})
})
            
app.get('/notes/get', (req, res)=> {
  res.status(200).json({data: notes})
})

app.delete('/notes/delete/:id', (req, res) => {
  let reqDelNoteId = req.params.id;
  console.log("req id", reqDelNoteId)

  notes.splice(notes.findIndex(note => String(note.id) === String(reqDelNoteId)), 1);
  res.status(200).json({ data: notes });
})

app.post('/notes/preview',(req, res) => {
  let {id} = req.body
  let note = notes.find((n) => String(n.id) == String(id) )
  res.status(200).json({data:note})
})

app.post('/notes/preview/previewUpdate',(req, res) => {
  let {noteId,updateBody} = req.body

  let indexOfNoteToUpdate = notes.findIndex((n) => String(n.id) == String(noteId) )

  let noteToUpdate = notes.find((n) => String(n.id) == String(noteId) )

  noteToUpdate = {...noteToUpdate, ...updateBody}

  notes[indexOfNoteToUpdate] = noteToUpdate

  res.status(200).json({data:noteToUpdate})

  



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})