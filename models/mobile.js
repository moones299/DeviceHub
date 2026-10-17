import { models, model, Schema } from "mongoose"

const mobileSchema = new Schema({

    image: {
        type: String,
        required: [true, 'Image is required']
    },

    text: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true,
        minLength: [10, 'Description must be at least 10 characters']
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },

    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true
    }

})

const Mobile = models.Mobile || model('Mobile', mobileSchema)

export default Mobile