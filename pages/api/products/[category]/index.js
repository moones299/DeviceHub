import Camera from "@/models/camera";
import Laptop from "@/models/laptop";
import Mobile from "@/models/mobile";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {

    await connectDB()

    if (req.method == "GET") {

        const { category, search } = req.query

        let products = null

        if (category == "laptops") {

            if (search) {

                products = await Laptop.find({
                    $or: [
                        {
                            brand: {
                                $regex: search,
                                $options: "i"
                            }
                        },
                        {
                            text: {
                                $regex: search,
                                $options: "i"
                            }
                        }
                    ]
                })

            } else {

                products = await Laptop.find()

            }

        } else if (category == "mobiles") {

            if (search) {

                products = await Mobile.find({
                    $or: [
                        {
                            brand: {
                                $regex: search,
                                $options: "i"
                            }
                        },
                        {
                            text: {
                                $regex: search,
                                $options: "i"
                            }
                        }
                    ]
                })

            } else {

                products = await Mobile.find()

            }

        } else if (category == "cameras") {

            if (search) {

                products = await Camera.find({
                    $or: [
                        {
                            brand: {
                                $regex: search,
                                $options: "i"
                            }
                        },
                        {
                            text: {
                                $regex: search,
                                $options: "i"
                            }
                        }
                    ]
                })

            } else {

                products = await Camera.find()

            }

        } else {

            return res.status(404).json({
                message: "category not found"
            })

        }

        if (products.length > 0) {

            res.json(products)

        } else {

            res.status(404).json({
                message: "product not found"
            })

        }

    } else {

        res.status(405).json({
            message: "method not allowed"
        })

    }
}