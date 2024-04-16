const mongoose = require('mongoose');
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const Note = require("./models/note")
const app = express()
const noteRoute = require("./routes/noteRoute")
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(noteRoute)


const port = 3000
// Connection URI
const uri = 'mongodb+srv://raodeepanshu99:5ktfM7JLuPNkJ1oj@cluster0.agztd08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // You can start defining and using your models here
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));



    

// app.post('/notes/add', async (req, res) => {
//     let reqBody = req.body
//    console.log("req body", reqBody)
//    let {noteData} = reqBody

//    let note = new Note({
//     title: noteData.title,
//     content: noteData.body
//    })

//    await note.save() // .save() is mongoose inbuilt function to save data in mongodb server

//     res.status(201).json({data:note})
// })
            
// app.get('/notes/get', async (req, res)=> {
//   let notes = await Note.find({})
//   res.status(200).json({data: notes})
// })

/*app.delete('/notes/delete/:id', (req, res) => {
  let reqDelNoteId = req.params.id;
  console.log("req id", reqDelNoteId)

  notes.splice(notes.findIndex(note => String(note.id) === String(reqDelNoteId)), 1);
  res.status(200).json({ data: notes });
}) */





// app.post('/notes/preview',(req, res) => {
//   let {id} = req.body
//   let note = notes.find((n) => String(n.id) == String(id) )
//   res.status(200).json({data:note})
// })

// app.post('/notes/preview/previewUpdate',(req, res) => {
//   let {noteId,updateBody} = req.body

//   let indexOfNoteToUpdate = notes.findIndex((n) => String(n.id) == String(noteId) )

//   let noteToUpdate = notes.find((n) => String(n.id) == String(noteId) )

//   noteToUpdate = {...noteToUpdate, ...updateBody}

//   notes[indexOfNoteToUpdate] = noteToUpdate

//   res.status(200).json({data:noteToUpdate})

  



// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})