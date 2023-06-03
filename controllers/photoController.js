import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";
import dotenv from 'dotenv';

dotenv.config();

export const weddingPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"wedding"})
        const weddingPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            weddingPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}

export const candidPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"candid"})
        const candidPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            candidPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng candid photos",
            error,
        });
    }
}

export const liveEventsPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"live-events"})
        const liveEventsPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            liveEventsPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}


export const preWeddingPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"pre-wedding"})
        const preWeddingPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            preWeddingPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}


export const babyShowerPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"baby-shower"})
        const babyShowerPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            babyShowerPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}


export const aerialPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"aerial"})
        const aerialPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            aerialPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}

export const socialWorkPhotosController = async (req, res) => {
    try {
        const category = await categoryModel.find({slug:"social-work"})
        const socialWorkPhotos = await productModel.find({category:category})
        res.status(200).send({
            success: true,
            socialWorkPhotos
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng wedding photos",
            error,
        });
    }
}