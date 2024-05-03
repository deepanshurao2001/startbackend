const Tag = require("../model/Tag");

const createTag = async (req, res) => {
  try {
    const { title, author } = req.body;
    let tag = new Tag({
      title: title,
      author: author,
    });
    await tag.save();
    res.status(201).json({ data: tag });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "an unknown error occurred" });
  }
};

const getTags = async (req, res) => {
  try {
    const { authorId } = req.body;
    let tags = await Tag.find({ author: authorId });
    res.status(200).json({ data: tags });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "an unknown error occurred" });
  }
};

module.exports = {
  createTag,
  getTags,
};
