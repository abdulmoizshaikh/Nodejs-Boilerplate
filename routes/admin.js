let express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken'),
    constants = require('../misceallenous/constants'),
    db_insert = require('../misceallenous/db-functions/insert'),
    db_delete = require('../misceallenous/db-functions/delete'),
    db_read = require('../misceallenous/db-functions/read'),
    db_update = require('../misceallenous/db-functions/update');

// LOGGING IN

function verifyToken(req, res, next) {

    let token = req.body['x-access-token'];
    if (!token)
        return res.status(403).send({
            auth: false, message: 'No token provided.'});
    jwt.verify(token, constants.secret.secret, function (err, decoded) {
        if (err)
            return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}


////////////////////////--------------------------------------------- HANGOUT ROUTES -----------------------------------------------/////////////////////////


// INSERT


/**
 * @api {post} /admin/hangout
 * @apiGroup Hangout
 *@apiName Insert Hangout Event
 * @apiParamExample {json} Input
    *     {
 *       "opening_hours": {
 *             "weekday_text": [
 *                 "Monday: 5:30 PM \u2013 12:00 AM",
 *                 "Tuesday: 6:30 PM \u2013 12:00 AM",
 *                 "Wednesday: 6:30 PM \u2013 12:00 AM",
 *                 "Thursday: 6:30 PM \u2013 12:00 AM",
 *                 "Friday: 6:30 PM \u2013 12:00 AM",
 *                 "Saturday: 6:30 PM \u2013 12:00 AM",
 *                 "Sunday: 6:30 PM \u2013 12:00 AM"
 *             ]
 *         },
 *       "food": [],
 *         "fun": [],
 *         "shop": [],
 *         "geometry": {
 *             "location": {
 *                 "lat": 24.845183,
 *                 "lng": 66.990917
 *             }
 *         },
 *         "isOnHomepage": true,
 *         "sliderImages": [
 *             "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *             "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *             "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *         ],
 *         "placeImages": [
 *             "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *             "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *             "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *         ],
 *         "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *         "formatted_phone_number": "+92 336 0657617",
 *         "name": "Port Grand",
 *         "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *         "category": "hangout",
 *         "rating": 4.6,
 *         "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *         "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan\u2019s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *         "website": "http://www.portgrand.com/",
 *      }
 *
 *
 * @apiSuccessExample {json} Success
     *        {
 *          "responseCode": 201,
 *             "responseMessage": "Success",
 *             "data": {
 *                 "result": "Hangout Place , Port Grand , Successfully Created"
 *             }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */



router.post("/hangout", function (req, res) {
    db_insert.insertHangoutPlace(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Hangout Place , " + response + " , Successfully Created"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});

/**
 * @api {delete} /admin/hangout/:id
 * @apiGroup Hangout
 *@apiName Delete Hangout Event
 * @apiSuccessExample {json} Success
 *        {
 *          "responseCode": 201,
 *             "responseMessage": "Success",
 *             "data": {
 *                 "result": "Hangout Place , Port Grand , Successfully deleted"
 *             }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

// DELETE

router.delete("/hangout/:id", function (req, res) {
    db_delete.deleteHangoutPlace(req.params.id).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Hangout Place , " + response + " , Successfully deleted"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});

//UPDATE

/**
 * @api {update} /admin/hangout/:id
 * @apiGroup Hangout
 *@apiName Delete Hangout Event
 * @apiSuccessExample {json} Success
 *        {
 *          "responseCode": 201,
 *             "responseMessage": "Success",
 *             "data": {
 *                 "result": "Hangout Place , Port Grand , Successfully updated"
 *             }
 *          }
 *           * @apiParamExample {json} Input
 *     {
 *       "opening_hours": {
 *             "weekday_text": [
 *                 "Monday: 5:30 PM \u2013 12:00 AM",
 *                 "Tuesday: 6:30 PM \u2013 12:00 AM",
 *                 "Wednesday: 6:30 PM \u2013 12:00 AM",
 *                 "Thursday: 6:30 PM \u2013 12:00 AM",
 *                 "Friday: 6:30 PM \u2013 12:00 AM",
 *                 "Saturday: 6:30 PM \u2013 12:00 AM",
 *                 "Sunday: 6:30 PM \u2013 12:00 AM"
 *             ]
 *         },
 *       "food": [],
 *         "fun": [],
 *         "shop": [],
 *         "geometry": {
 *             "location": {
 *                 "lat": 24.845183,
 *                 "lng": 66.990917
 *             }
 *         },
 *         "isOnHomepage": true,
 *         "sliderImages": [
 *             "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *             "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *             "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *         ],
 *         "placeImages": [
 *             "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *             "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *             "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *         ],
 *         "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *         "formatted_phone_number": "+92 336 0657617",
 *         "name": "Port Grand",
 *         "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *         "category": "hangout",
 *         "rating": 4.6,
 *         "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *         "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan\u2019s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *         "website": "http://www.portgrand.com/",
 *      }
 *
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */
router.put("/hangout/:id", function (req, res) {
    db_update.updateHangoutPlace(req.params.id, req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Hangout Place , " + response + " , Successfully updated"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});

////////////////////////---------------------------------------------  USER ROUTES -----------------------------------------------/////////////////////////


/**
 * @api {post} /user-login  Signs In The EndUser
 * @apiGroup Auth
 *@apiName Sign In
 *  @apiParamExample {json} Body
 *    {
 *      "email": "email@example.com",
 *      "password" : "12345678"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *                      "auth": true,
 *                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjFkZTIyZWQ5MzA2MDAxNjRhYzkzYSIsImlhdCI6MTU0NTcyMzQ1MywiZXhwIjoxNTQ1ODA4MDUzfQ.82kXmuOOZAx2Yjt-oJev7dELQ3IyLTntqezVcDVf6eo",
 *                      "user": {
 *                          "_id": "5c21de22ed930600164ac93a",
 *                          "name": "ahshq",
 *                          "email": "123@123.com",
 *                          "dateOfBirth": "Fri Jan 01 1999 00:00:00 GMT+0500 (Pakistan Standard Time)",
 *                          "gender": "Male",
 *                          "profile_photo_url": "https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/1.jpg?alt=media&token=ddacd543-dfab-4697-bc44-c7f49e74bd0d",
 *                          "time": "2018-12-25T07:37:05.415Z",
 *                          "uuid": "764ba4bc-67ba-40bf-8d91-843c2351b3aa",
 *                          "__v": 0
 *                      }
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */



router.post('/user-login', function (req, res) {
    db_read.authenticateUser(req.body).then((response) => {

        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});

router.get('/logout', function (req, res) {
    res.status(200).send(
        {
            auth: false,
            token: null
        }
    )
});


/**
 * @api {post} /admin/forgot-password  Sends email for password reset
 * @apiGroup Auth
 *@apiName Forgot Password
 *  * @apiParamExample {json} Input
 *    {
 *      "email": "email@example.com"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */


router.post('/forgot-password', function (req, res) {
    db_insert.forgotPassword(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


/**
 * @api {get} /admin/reset/:token Token validation for password reset
 * @apiGroup Auth
 * @apiName Checks if token is valid
 * @apiParam {string} token user token from email
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */


router.get('/reset/:token',  function (req, res) {
    db_insert.ifValidResetPassword(req.params.token).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});



/**
 * @api {post} /admin/reset/:token Resets the password
 * @apiGroup Auth
 * @apiParam {id} token user token from email
 *  * @apiParamExample {json} Input
 *    {
 *      "password" : "anyPassword"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */


router.post('/reset/:token',  function (req, res) {
    db_insert.resetPassword(req.params.token , req.body.password).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


router.post('/get-all-users', verifyToken, function (req, res) {
    db_read.getAllUsers().then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});



/**
 * @api {post} /admin/user-register Register a new User
 * @apiGroup Auth
 *  * @apiParamExample {json} Input
 *    {
 *      "password" : "anyPassword"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.post('/user-register', function (req, res) {
    db_insert.insertUser(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response

                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


////////////////////////--------------------------------------------- FEATURED ROUTES -----------------------------------------------/////////////////////////


// INSERT

router.post("/featured", function (req, res) {
    db_insert.insertFeaturedPlace(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Featured Place , " + response + " , Successfully Created"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});


// DELETE


router.delete("/featured/:id", function (req, res) {
    db_delete.deleteFeaturedPlace(req.params.id).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Featured Place , " + response + " , Successfully deleted"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});


//UPDATE

router.put("/featured/:id", function (req, res) {
    db_update.updateFeaturedPlace(req.params.id, req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Featured Place , " + response + " , Successfully updated"
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});


////////////////////////--------------------------------------------- COMMENTS ROUTES -----------------------------------------------/////////////////////////


//CREATE

router.post("/featured/:id/review", verifyToken, function (req, res) {
    db_insert.insertReview(req.params.id, req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});


//UPDATE


router.put("/featured/:id/review", verifyToken, function (req, res) {
    db_update.updateFeaturedPlaceReview(req.params.id, req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});


// DELETE


router.post("/featured/:id/review/delete", verifyToken, function (req, res) {
    db_delete.deleteFeaturedPlaceUserReview(req.params.id).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });

});

module.exports = router;
