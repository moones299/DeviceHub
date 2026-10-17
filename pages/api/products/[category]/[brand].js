import Laptop from "@/models/laptop"
import Mobile from "@/models/mobile"
import Camera from "@/models/camera"

import mongoose from "mongoose"

export default async function handler(req, res) {

    await mongoose.connect('mongodb://localhost:27017/store')

    if (req.method == "GET") {

        const { category, brand } = req.query

        let products = null

        if (category == "laptops") {

            products = await Laptop.find({
                brand: brand
            })

        } else if (category == "mobiles") {

            products = await Mobile.find({
                brand: brand
            })

        } else if (category == "cameras") {

            products = await Camera.find({
                brand: brand
            })

        } else {

            return res.status(404).json({
                message: "category not found"
            })

        }
          if (products.length > 0) {
        res.json(products)
    } else {
        res.status(404).json({
            message: "brand not found"
        })
    }

        res.json(products)
    }
}