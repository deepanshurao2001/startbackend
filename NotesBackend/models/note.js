const {Schema, model} = require("mongoose")

// Schema means properties of a entity (Eg. note)
const noteSchema = new Schema({
   title: String,
   content: String
});

// To use that schema u need to create its model
const Note = model('Note', noteSchema);

module.exports = Note
