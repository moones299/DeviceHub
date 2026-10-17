import Camera from "@/models/camera";
import Laptop from "@/models/laptop";
import Mobile from "@/models/mobile";
import connectDB from "@/utils/connectDB";


export default async function handler(req , res){
await connectDB()


if(req.method == "GET"){
    const laptops = await Laptop.find()
    const mobiles= await Mobile.find()
    const cameras= await Camera.find()
   
    res.json({laptops,mobiles,cameras})
}else if (req.method == "POST") {

    const { category } = req.body

    if (category == "laptops") {

        await Laptop.create(req.body)

        res.status(201).json({
            message: "new laptop added to db"
        })

    } else if (category == "mobiles") {

        await Mobile.create(req.body)

        res.status(201).json({
            message: "new mobile added to db"
        })

    } else if (category == "cameras") {

        await Camera.create(req.body)

        res.status(201).json({
            message: "new camera added to db"
        })

    } else {
        res.status(404).json({
            message: "category not found"
        })
    }
}



}