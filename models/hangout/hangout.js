let mongoose = require("mongoose");

hangoutSchema = new mongoose.Schema({
    name: String,
    formatted_address: String,
    website: String,
    shortDescription: String,
    cost: Number,
    sliderImages: [],
    google_place_id: String,
    isOnHomepage : Boolean,
    opening_hours: {
        open_now: Boolean,
        weekday_text: []
    },
    event : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }
    ],
    food: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'foodFeatured'
            }

        ],
    fun: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'foodFeatured'
            }

        ],
    shop: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'foodFeatured'
            }

        ],
    formatted_phone_number: String,
    bannerImage: String,
    placeImages: [],
    category: String,
    rating: Number,
    hits: Number,
    geometry: {
        location: {
            lat: Number,
            lng: Number,
            distance: Number,
            duration: Number,
        }
    }
});

//MODEL
module.exports = mongoose.model("hangout", hangoutSchema);