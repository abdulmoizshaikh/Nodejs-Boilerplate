let mongoose = require("mongoose");
 foodFeaturedDetailSchema = new mongoose.Schema({
    name: String,
    icon: String,
    formatted_address: String,
    types: String,
    website: String,
    isOnHomepage: Boolean,
    opening_hours: {
        open_now: Boolean,
        weekday_text: []
    },
    formatted_phone_number: String,
    description: String,
    bannerImage: String,
    featured_id: String,
    google_place_id: String,
    sliderImages: [],
    category: String,
    foodType: String,
    facebookUrl: String,
    placeImages: [],
    rating: Number,
    menuImages: [],
    cost: Number,
    shortDescription: String,
    hits: Number,
    facilities: [],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
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
module.exports = mongoose.model("foodFeaturedDetail", foodFeaturedDetailSchema);