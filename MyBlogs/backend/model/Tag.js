const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    title: { type: String },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Tag = model("tag", tagSchema);

module.exports = Tag;
