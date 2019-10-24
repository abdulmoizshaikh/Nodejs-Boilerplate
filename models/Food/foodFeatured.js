var mongoose = require("mongoose");

foodFeaturedSchema = new mongoose.Schema({
    name: String,
    icon: String,
    formatted_address: String,
    google_place_id: String,
    isOnHomepage: Boolean,
    featured_detail_id: String,
    website: String,
    opening_hours: {
        open_now: Boolean,
    },
    formatted_phone_number: String,
    bannerImage: String,
    category: String,
    foodType: String,
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
module.exports = mongoose.model("foodFeatured", foodFeaturedSchema);