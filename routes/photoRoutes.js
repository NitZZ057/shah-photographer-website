import express from "express";
import {weddingPhotosController,
    candidPhotosController,
    liveEventsPhotosController,
    preWeddingPhotosController,
    babyShowerPhotosController,
    aerialPhotosController,
    socialWorkPhotosController
} from '../controllers/photoController.js'

const router = express.Router();

router.get("/wedding", weddingPhotosController);
router.get("/candid", candidPhotosController);
router.get("/live-events", liveEventsPhotosController);
router.get("/pre-wedding", preWeddingPhotosController);
router.get("/baby-shower", babyShowerPhotosController);
router.get("/aerial", aerialPhotosController);
router.get("/social-work", socialWorkPhotosController);

export default router;