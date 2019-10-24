var exports = module.exports = {},
    foodFeaturedModel = require('../../models/Food/foodFeatured'),
    hangoutModel = require("../../models/hangout/hangout"),
    userReviewModel = require('../../models/user/review'),
    constants = require('../../misceallenous/constants'),
    eventModel = require('../../models/Event/event'),
    foodFeaturedDetailModel = require("../../models/Food/foodFeaturedDetail");


exports.deleteHangoutPlace = async (placeId) => {
    try {
        let hangoutPlace = await  hangoutModel.findByIdAndRemove(placeId);
        return hangoutPlace.name
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.deleteHangoutPlaceEvent= async (hangoutId , eventId) => {
    try {
        let hangout = await hangoutModel.findById(hangoutId);
        if(!hangout){
            throw new Error("Invalid hangout Id")
        }
        let index = await hangout.event.indexOf(eventId);
        if(index > -1){
            hangout.event.splice(index,1);
        }
        await hangout.save();
        let event = await  eventModel.findByIdAndRemove(eventId);
        if(!event){
            throw new Error("Invalid event Id")
        }
        return constants.responseMessages.Success
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.deleteFeaturedPlaceUserReview= async (reviewId) => {
    try {
        await  userReviewModel.findByIdAndRemove(reviewId);
        return constants.responseMessages.Success
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};


exports.deleteFeaturedPlace = async (placeId) => {
    try {
       let featuredShortData = await  foodFeaturedModel.findByIdAndRemove(placeId);
        await  foodFeaturedDetailModel.findByIdAndRemove(featuredShortData.featured_detail_id);
        return featuredShortData.name
    }  catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
