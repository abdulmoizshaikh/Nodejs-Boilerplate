var exports = module.exports = {},
    foodFeaturedModel = require('../../models/Food/foodFeatured'),
    constants = require('../constants'),
    db_read = require('./read'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    userModel = require('../../models/user/login'),
    eventModel = require('../../models/Event/event'),
    reviewModel = require('../../models/user/review'),
    hangoutModel = require("../../models/hangout/hangout"),
    restPortalModel = require('../../models/RestaurantPortal/login'),
    foodFeaturedDetailModel = require("../../models/Food/foodFeaturedDetail");


exports.forgotPassword = async (user) => {
    try {

        if(await constants.isDuplicateUser(user)){
            throw new Error("No email found");
        }
        let requiredUser = await userModel.findOne({email: user.email});
        let token = jwt.sign({id : requiredUser._id } , constants.secret.secret , {
            expiresIn: 84600
        });

        requiredUser.reset_password_token = token;
        requiredUser.reset_password_expires = Date.now() + 3600000; // 1 hour

        await requiredUser.save();


        await constants.sendForgotPasswordMail(requiredUser.email , token);
        return constants.responseMessages.Success;

    }catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.resetPassword = async (token , password) => {
    try {
        let resetPasswordUser = await  userModel.findOne({ reset_password_token: token, reset_password_expires: { $gt: Date.now() } });
        if (!resetPasswordUser) {
            throw new Error ('Password reset token is invalid or has expired.');
        }
        resetPasswordUser.password = await bcrypt.hash(password, constants.SALT);
        resetPasswordUser.reset_password_token = undefined;
        resetPasswordUser.reset_password_expires = undefined;

        await resetPasswordUser.save();
        await constants.sendPasswordChangedMail(resetPasswordUser.email);

        return constants.responseMessages.Success;


    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.ifValidResetPassword = async (token) => {
    try {
        let resetPasswordUser = await  userModel.findOne({ reset_password_token: token, reset_password_expires: { $gt: Date.now() } });
            if (!resetPasswordUser) {
                throw new Error ('Password reset token is invalid or has expired.');
            }
            return true;

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.insertUser = async (user) => {
    try {
        if (await constants.isDuplicateUser(user)) {
            let hashOfPassword = await bcrypt.hash(user.password, constants.SALT);

            let insertedUser = await userModel.create({
                name: user.name,
                password: hashOfPassword,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                gender : user.gender,
                profile_photo_url : user.profile_photo_url,
                time : user.time,
                uuid: constants.generateUUID()
            });

            let token = jwt.sign({id : insertedUser._id } , constants.secret.secret , {
                expiresIn: 84600
            });

            let returningUser = insertedUser.toObject();
            delete returningUser.password;

            return {auth : true  , token : token , user : returningUser};
        }
        throw new Error(constants.responseMessages.emailAlreadyExists)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }

};



exports.insertRestaurantUser = async (user) => {
    try {
        if (await constants.isDuplicateUser(user)) {
            let hashOfPassword = await bcrypt.hash(user.password, constants.SALT);

            let insertedUser = await restPortalModel.create({
                name_of_admin: user.name_of_admin,
                password: hashOfPassword,
                email: user.email,
                place_id: user.place_id,
                place_name : user.place_name,
                uuid: constants.generateUUID()
            });

            let token = jwt.sign({id : insertedUser._id } , constants.secret.secret , {
                expiresIn: 84600
            });

            let returningUser = insertedUser.toObject();
            delete returningUser.password;

            return {auth : true  , token : token , user : returningUser};
        }
        throw new Error(constants.responseMessages.emailAlreadyExists)

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }

};

exports.insertReview = async (placeId, review) => {
    try {
        let comment = await reviewModel.create(review);
        let featuredPlace = await foodFeaturedDetailModel.findById(placeId);
        await featuredPlace.reviews.push(comment);
        await featuredPlace.save();

        return comment
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }

};

exports.insertHangoutEvent = async (hangoutId , eventData) => {
    try {
        let event = await eventModel.create(eventData);
        let hangoutPlace = await hangoutModel.findById(hangoutId);
        await  hangoutPlace.event.push(event);
        await  hangoutPlace.save();

        return event;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.insertHangoutPlace = async (placeData) => {
    try {
        let hangoutPlace = await hangoutModel.create(placeData);
        return hangoutPlace.name;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }

};

exports.insertFeaturedPlace = async (placeData) => {
    let homepageFeaturedCount = await db_read.getFoodFeaturedHomepageCount();
    if ((homepageFeaturedCount === true) || (placeData.isOnHomepage === false)) {
        try {
            let foodFeaturedDetail = await foodFeaturedDetailModel.create(placeData);
            let foodFeatured = await foodFeaturedModel.create(placeData);
            await foodFeaturedModel.findByIdAndUpdate(foodFeatured._id, {featured_detail_id: foodFeaturedDetail._id});
            await  foodFeaturedDetailModel.findByIdAndUpdate(foodFeaturedDetail._id, {featured_id: foodFeatured._id});
            return foodFeaturedDetail.name;
        } catch (e) {
            console.log(e);
            throw new Error(e)
        }

    } else {
        throw new Error("Featured restaurant limit on homepage is full , delete some restaurants then try again.")
    }


};
