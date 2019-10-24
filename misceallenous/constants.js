var exports = module.exports = {},
    userModel = require('../models/user/login'),
    jwt = require('jsonwebtoken'),
    constants = require('constants'),
    nodeMailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    axios = require("axios");

exports.API_KEY = "AIzaSyDqZXfHYD0qkwhpv-mqQ7lK1cp0F4S60bE";
exports.email = "haqtaha@gmail.com";
exports.RADIUS = "3000";
exports.SALT = 10;
exports.SMSID = "923472360717";
exports.SMSPASS = "9347";
exports.responseMessages = {
    passwordNotMatch: 'Password doesn\'t match - Please Retry',
    dataFetched: 'Success - Data fetched successfully',
    emailNotFound: 'Email not found - Please enter correct one',
    emailAlreadyExists: "Can't register - Email already exists",
    loggedOut: "User , Successfully logged out",
    Success: "Success!",
    smsSuccess : "Successfully sent",
    notLoggedIn: "User not logged in"

};

// giving access to nodeMailer for logging into mail account
let mailTransporter = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: "haqtaha@gmail.com",
        pass: 'mvibckbmjwpddzsj'
    }
});

exports.secret = {
    'secret': 'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAW4lFUCuJ6QDo5djTQtuhebj9aNq/m59hwvgWNXNz3q8PJ6vQXEOoXE7smZARn+4+7RP+olUYfIGDiji4NBLYCQIDAQAB'
};

exports.placesName = {
    food: ["restaurant", "cafe"],
    fun: ["amusement_park", "movie_theater", "park"],
    shop: ["clothing_store", "supermarket", "jewelry_store"]
};


exports.getMultiplePlacesData = async (category, lat, lng) => {
    try {
        let foodGoogleData = {
            category: 'food',
            restaurant: {},
            cafe: {}

        };
        let funGoogleData = {
            category: 'fun',
            amusement_park: {},
            movie_theater: {},
            park: {}

        };

        let shopGoogleData = {
            category: 'shop',
            clothing_store: {},
            supermarket: {},
            jewelry_store: {}
        };

        if (category === 'food') {
            for (let i = 0; i < exports.placesName.food.length; i++) {
                await exports.getPlacesData(exports.placesName.food[i], lat, lng).then((response) => {
                    foodGoogleData[exports.placesName.food[i]] = response;
                });
            }
            return foodGoogleData;
        }
        else if (category === 'fun') {
            for (let i = 0; i < exports.placesName.fun.length; i++) {
                await exports.getPlacesData(exports.placesName.fun[i], lat, lng).then((response) => {
                    funGoogleData[exports.placesName.fun[i]] = response;
                });
            }
            return funGoogleData;
        }
        else if (category === 'shop') {
            for (let i = 0; i < exports.placesName.shop.length; i++) {
                await exports.getPlacesData(exports.placesName.shop[i], lat, lng).then((response) => {
                    shopGoogleData[exports.placesName.shop[i]] = response;
                });
            }
            return shopGoogleData;
        }
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.sendSMS = async (message , formatted_phone_number) => {
    try {
        await  axios.get("http://sendpk.com/api/sms.php?username="+exports.SMSID+"&password="+exports.SMSPASS+"&sender=FoodFunShop&mobile="+formatted_phone_number+"&message="+message);
        return exports.responseMessages.smsSuccess;
    }
  catch (e) {
      console.log(e);
      throw new Error(e);
  }
};

exports.getTransitData = async (places, lat, lng) => {
    try {
        let destinationCoordinates = "";
        //Building destination string e.g 23.990,34.544|23.990,34.544
        for (let i = 0; i < places.length; i++) {
            if (i < places.length - 1) {
                destinationCoordinates += (places[i].geometry.location.lat + "," + places[i].geometry.location.lng + "|");
            } else {
                destinationCoordinates += (places[i].geometry.location.lat + "," + places[i].geometry.location.lng);
            }
        }

        let requestData = await axios.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + lat + "," + lng
            + "&destinations=" + destinationCoordinates + "&key=" + exports.API_KEY);

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.getDetailPlaceData = async (placeId) => {
    try {
        let requestData = await axios.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId + "&key=" + exports.API_KEY);
        return requestData.data.result;
    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};


exports.removePlacesWithoutPhoto = async (places) => {
    try {
        const placesWithPhotos = [];
        for (let i = 0; i < places.length; i++) {
            if (places[i].hasOwnProperty('photos')) {
                placesWithPhotos.push(places[i]);
            }
        }
        return placesWithPhotos

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

exports.sendPasswordChangedMail = (email) => {
    try {
        const mailOptions = {
            from: constants.email, // sender address
            to: email, // list of receivers
            subject: 'Your Password has been changed for FoodFunShop', // Subject line
            text: 'Hello,\n\n' +
                'This is a confirmation that the password for your account ' + email + ' has just been changed.\n'


        };
        mailTransporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                throw new Error(err);
            }
            else{
            }
        });

    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};

exports.sendForgotPasswordMail = (email,token) => {
  try {
      const mailOptions = {
          from: constants.email, // sender address
          to: email, // list of receivers
          subject: 'Password Reset FoodFunShop', // Subject line
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              'http://' + 'foodfunshop.com' + '/reset/' + token + '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'

      };
      mailTransporter.sendMail(mailOptions, function (err, info) {
          if (err) {
              console.log(err);
              throw new Error(err);
          }
          else{
          }
      });

  } catch (e) {
      console.log(e);
      throw new Error(e)
  }
};

exports.isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

exports.isDuplicateUser = async (user) => {
    let duplicateUser = await userModel.find({email: user.email});
    return !Array.isArray(duplicateUser) || !duplicateUser.length;
};

exports.getPlacesData = async (type, lat, lng) => {
    try {
        let requestData = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng +
            "&radius=" + exports.RADIUS + "&type=" + type + "&key=" + exports.API_KEY);

        return exports.removePlacesWithoutPhoto(requestData.data.results);


    } catch (e) {
        console.log(e);
        throw new Error(e)
    }
};
