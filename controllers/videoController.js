import videoModel from "../models/videoModel.js";
import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import dotenv from 'dotenv';

dotenv.config();

export const createVideoController = async (req, res) => {
  try {
    console.log(req.name)
    const { name, description, category, featured } =
      req.fields;


    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !featured:
        return res.status(500).send({ error: "Select the radio button" });
    }

    const videos = new videoModel({ ...req.fields, slug: slugify(name) });

    await videos.save();
    res.status(201).send({
      success: true,
      message: "Video Added Successfully",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in adding video",
    });
  }

}

export const getVideosController = async (req, res) => {
  try {
    const videos = await videoModel.find({});
    res.status(200).send({
      success: true,
      message: "All videos List",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all videos",
    });
  }
}

export const featuredVideosController = async (req, res) => {
  try {
    const videos = await videoModel.find({ featured: "1" });
    res.status(200).send({
      success: true,
      message: "All videos List",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all videos",
    });
  }
}

export const getSingleVideoController = async (req, res) => {
  try {
    const video = await videoModel.findOne({ slug: req.params.slug }).populate("category");
    res.status(200).send({
      success: true,
      message: "Single video fetched",
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting video",
    });
  }
}

export const updateVideoController = async (req, res) => {
  try {
    const { name, description, category, featured } =
      req.fields;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case !featured:
        return res.status(500).send({ error: "Select radio option" });
    }

    const videos = await videoModel.findByIdAndUpdate(
      req.params.vid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    await videos.save();
    res.status(201).send({
      success: true,
      message: "Video Updated Successfully",
      videos,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Update video",
    });
  }
};

export const deleteVideoController = async (req, res) => {
  try {
    await videoModel.findByIdAndDelete(req.params.vid);
    res.status(200).send({
      success: true,
      message: "Video Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting Video",
      error,
    });
  }
};


export const weddingVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"wedding"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const candidVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"candid"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const liveEventsVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"live-events"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const preWeddingVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"pre-wedding"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const babyShowerVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"baby-shower"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const aerialVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"aerial"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}
export const socialWorkVideosController = async (req, res) => {
  try {
    const category = await categoryModel.find({slug:"social-work"})
    const videos = await videoModel.find({ category:category });
    res.status(200).send({
      success: true,
      message: "All wedding videos ",
      videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting wedding videos",
    });
  }

}