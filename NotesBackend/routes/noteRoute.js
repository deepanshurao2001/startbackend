const express = require('express');
const router = express.Router();
const {getAllNotes, addNote, deleteNote} = require("../controllers/noteController.js")

// Get all tasks
router.get('/notes/get', getAllNotes);

router.post('/notes/add', addNote);

router.delete('/notes/delete',deleteNote)

module.exports = router