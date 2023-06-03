import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    featured:{
        type: String,
        required: true
    }
});

export default mongoose.model("Video", videoSchema);