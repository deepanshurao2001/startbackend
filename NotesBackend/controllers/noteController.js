const Note = require('../models/note')

const getAllNotes = async (req,res) => {
    try {
        let notes = await Note.find({})
        res.status(200).json({data: notes})
    } catch (err) {
        console.log("Error is: ",err)
    }
}

const addNote = async (req,res) => {
    try{
        let reqBody = req.body
        console.log("req body", reqBody)
        let {noteData} = reqBody
     
        let note = new Note({
         title: noteData.title,
         content: noteData.body
        })
     
        await note.save() // .save() is mongoose inbuilt function to save data in mongodb server
     
         res.status(201).json({data:note})
    }
    catch{
        console.log("Error is: ",err)
    }
}

const deleteNote = async (req, res) => {
    
        let reqBody = req.body;
        console.log("req id", reqBody)

        let {reqDelNoteId} = reqBody

      await  Note.findByIdAndDelete(reqDelNoteId)
        res.status(204).json({ data: 'delete success' });
    
}


module.exports = {
    getAllNotes , addNote , deleteNote
}

/*



*/