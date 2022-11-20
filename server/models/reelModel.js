const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema(
  {
    title: String,
    videoUrl: {
      type: Array,
      required: true,
    },
    type: String,
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
    user: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reel", reelSchema);
