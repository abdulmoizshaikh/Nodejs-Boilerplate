let mongoose = require("mongoose");

eventSchema = new mongoose.Schema({
    photos : [],
    video : [],
    title : String,
    title_image : String,
    location : String,
    fb_event_link : String,
    description: String,
    start_time : String,
    end_time : String
});

//MODEL
module.exports = mongoose.model("event",eventSchema);