var mongoose = require("mongoose");

restaurantPortalSchema  = new mongoose.Schema({
    name_of_admin : String,
    email : String,
    password : String,
    place_id : String,
    place_name :String,
    reset_password_token: String,
    reset_password_expires: Date
});


module.exports = mongoose.model("RestaurantPortal", restaurantPortalSchema);