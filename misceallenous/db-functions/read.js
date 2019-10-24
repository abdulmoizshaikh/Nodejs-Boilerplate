var exports = module.exports = {},
    foodFeatured = require('../../models/Food/foodFeatured'),
    hangoutModel = require("../../models/hangout/hangout"),
    userModel = require('../../models/user/login'),
    bcrypt = require('bcrypt'),
    timeago = require('javascript-time-ago'),
    en = require('javascript-time-ago/locale/en'),
    jwt = require('jsonwebtoken'),
    restPortal = require('../../models/RestaurantPortal/login'),
    constants = require('../../misceallenous/constants'),
    foodFeaturedDetail = require('../../models/Food/foodFeaturedDetail');


// HANGOUT FUNCTIONS

exports.getHangoutPlaces = async () => {
    try {
        return await hangoutModel.find({});
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getHangoutPlaceDetail = async (hangoutId) => {
    try {
        return await hangoutModel.findById(hangoutId)
            .populate('food')
            .populate('fun')
            .populate('shop')
            .populate('event')

    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


////////////////////////--------------------------------------------- RESTAURANT PORTAL FUNCTION -----------------------------------------------/////////////////////////


exports.getAllFeaturedPlacesLogin = async () => {
    try {
        return await restPortal.find({});
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.authenticateRestaurantUser = async (user) => {
    try {
        let dbUser = await restPortal.find({email: user.email});
        if (constants.isEmpty(dbUser)) {
            throw new Error(constants.responseMessages.emailNotFound)
        }
        let match = await bcrypt.compare(user.password, dbUser[0].password);
        if (!match) {
            throw new Error(constants.responseMessages.passwordNotMatch);
        }

        let token = jwt.sign({id: dbUser[0]._id}, constants.secret.secret, {
            expiresIn: 84600
        });

        let returningUser = dbUser[0].toObject();
        delete returningUser.password;


        return {auth: true, token: token, user: returningUser}

    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


// USER-LOGIN FUNCTIONS

exports.authenticateUser = async (user) => {
    try {
        let dbUser = await userModel.find({email: user.email});
        if (constants.isEmpty(dbUser)) {
            throw new Error(constants.responseMessages.emailNotFound)
        }
        let match = await bcrypt.compare(user.password, dbUser[0].password);
        if (!match) {
            throw new Error(constants.responseMessages.passwordNotMatch);
        }

        let token = jwt.sign({id: dbUser[0]._id}, constants.secret.secret, {
            expiresIn: 84600
        });

        let returningUser = dbUser[0].toObject();
        delete returningUser.password;


        return {auth: true, token: token, user: returningUser}

    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getAllUsers = async () => {
    try {
        return await userModel.find({});
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


//// FEATURED FUNCTIONS

exports.getFoodFeatured = async () => {
    try {
        const foodFeaturedData = await foodFeatured.find({});
        for (let i = 0; i < foodFeaturedData.length; i++) {
            foodFeaturedData[i].opening_hours.open_now = true
        }
        return foodFeaturedData;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getFoodFeaturedHomepageCount = async () => {
    try {
        const count = await foodFeatured.find({isOnHomepage: true});
        return count.length < 3;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

exports.getHomepageFoodFeatured = async () => {
    try {
        const foodFeaturedData = await foodFeatured.find({isOnHomepage: true});
        for (let i = 0; i < foodFeaturedData.length; i++) {
            foodFeaturedData[i].opening_hours.open_now = true
        }
        return foodFeaturedData;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


exports.getHomepageHangoutPlaces = async () => {
    try {
        const hangoutData = await hangoutModel.find({isOnHomepage: true});
        for (let i = 0; i < hangoutData.length; i++) {
            hangoutData[i].opening_hours.open_now = true
        }
        return hangoutData;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};


exports.getFoodFeaturedDetail = async (featuredDetailId) => {
    try {
        timeago.addLocale(en);
        const timeAgo = new timeago('en-US');
        let placeDetail = await foodFeaturedDetail.findById(featuredDetailId).populate('reviews');
        for (let i = 0; i < placeDetail.reviews.length; i++) {
            let date = new Date(placeDetail.reviews[i].time);
            placeDetail.reviews[i].relative_time_description = timeAgo.format(date);
        }
        return placeDetail;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};