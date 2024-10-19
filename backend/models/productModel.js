const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        productDescription: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            default: "https://www.clarkrubber.com.au/dist/images/products/product-image-placeholder.jpg"
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }, 
    { timestamps: true }
)

const Product  = mongoose.model("Product", productSchema)
module.exports = Product