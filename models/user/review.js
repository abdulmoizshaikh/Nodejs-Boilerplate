let mongoose = require("mongoose");

reviewSchema  = new mongoose.Schema ({
    author_name: String,
    relative_time_description: String,
    profile_photo_url: String,
    rating: Number,
    text: String,
    userId : String,
    placeId : String,
    time: Number
});


module.exports = mongoose.model("Review", reviewSchema);