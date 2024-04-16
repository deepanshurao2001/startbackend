const express = require('express');
const router = express.Router();
const {getAllNotes, addNote, deleteNote, preview, previewupdate} = require("../controllers/noteController.js")

// Get all tasks
router.get('/notes/get', getAllNotes);

router.post('/notes/add', addNote);

router.post('/notes/delete',deleteNote);

router.post('/notes/preview',preview);

router.post('/notes/preview/previewUpdate',previewupdate);

module.exports = router