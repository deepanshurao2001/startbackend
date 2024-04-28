const { Schema, model } = require('mongoose')

const blogSchema = new Schema(
    {
        title: { type: String },
        description: { type: String },
        tags: [
            {
                type: Schema.Types.ObjectId, // _id data type inbuilt in mongoose
                ref: 'tag', // model name
            },
        ],
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
)

const Blog = model('blog', blogSchema)

module.exports = Blog
