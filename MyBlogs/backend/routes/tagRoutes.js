const express = require("express");
const router = express.Router();
const { createTag, getTags } = require("../controllers/tagController");
router.post("/tags/create", createTag);
router.post("/tags/get", getTags);

module.exports = router;
