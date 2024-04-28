const { Schema, model } = require('mongoose')

const tagSchema = new Schema(
    {
        title: { type: String },
    },
    { timestamps: true }
)

const Tag = model('tag', tagSchema)

module.exports = Tag
