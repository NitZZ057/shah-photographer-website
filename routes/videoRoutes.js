import express from "express";
import {
    createVideoController,
    getVideosController,
    featuredVideosController,
    getSingleVideoController,
    updateVideoController,
    deleteVideoController,
    weddingVideosController,
    candidVideosController,
    liveEventsVideosController,
    preWeddingVideosController,
    babyShowerVideosController,
    aerialVideosController,
    socialWorkVideosController,
    
} from '../controllers/videoController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
    "/create-video",
    requireSignIn,
    isAdmin,
    formidable(),
    createVideoController
);
router.put(
    "/update-video/:vid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateVideoController
  );

router.delete("/delete-video/:vid", deleteVideoController);
router.get("/get-video/:slug", getSingleVideoController);
router.get("/get-videos", getVideosController);
router.get("/featured-videos", featuredVideosController);
router.get("/wedding", weddingVideosController);
router.get("/candid", candidVideosController);
router.get("/live-events", liveEventsVideosController);
router.get("/pre-wedding", preWeddingVideosController);
router.get("/baby-shower", babyShowerVideosController);
router.get("/aerial", aerialVideosController);
router.get("/social-work", socialWorkVideosController);

export default router;