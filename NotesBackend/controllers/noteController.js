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

const preview = async (req, res) => {
        const { noteId } = req.body;
        console.log(noteId);
        const note = await Note.findById(noteId);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        // Assuming you only want to send title and a limited length content for preview
        const previewData = {
            title: note.title,
            content: note.content // Adjust the length as needed
        };
        res.status(200).json({ data: previewData });
  
};

const previewupdate = async (req, res) => {
   
        const { noteId, updateBody } = req.body;
        
        const updatedNote = await Note.findByIdAndUpdate(noteId, { ...updateBody }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json({ data: updatedNote });
};

module.exports = {
    getAllNotes , addNote , deleteNote , preview , previewupdate
}

/*



*/