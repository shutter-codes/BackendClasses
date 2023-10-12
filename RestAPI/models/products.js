const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    featured: {
        type: Boolean,
        required: true,
    },
    rating: { type: Number },
    createdAt: { type: Date, default: Date.now },
    company: { type: String, required: true },
});
