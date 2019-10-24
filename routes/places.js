var express = require('express'),
    router = express.Router(),
    db_read = require('../misceallenous/db-functions/read'),
    constants = require('../misceallenous/constants');


///////////////////////////// --------------------------------------------- GOOGLE ROUTES -----------------------------------------------/////////////////////////

/**
 * @api {get} /:type/:lat/:lon Gets nearby places by co-ordinates
 * @apiName GetNearbyPlaces
 * @apiGroup Places
 *
 * @apiParam {String} Type Type of place e.g (food,fun,shop)
 * @apiParam {Number} lat Latitude of place
 * @apiParam {Number} lon Longitude of place
 *
 *
 * @apiSuccessExample {json} Success
 *           [
 *{
 *                "name":"string",
 *                "icon":"string",
 *                "place_id":"string",
 *                "rating":0,
 *                "vicinity":"string",
 *                "opening_hours":{
 *                   "open_now":true
 *                },
 *                "types":[
 *                   "string"
 *                ],
 *                "photos":[
 *                   {
 *                      "height":0,
 *                      "width":0,
 *                      "photo_reference":"string",
 *                      "html_attribution":[
 *                         "string"
 *                      ]
 *                   }
 *                ]
 *             }
 *           ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */



router.get("/:type/:lat/:lon", function (req, res) {
    constants.getMultiplePlacesData(req.params.type, req.params.lat, req.params.lon).then((response) => {
        // SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: "Successful",
                data: {
                    results: response
                }
            }
        )
        // ERROR
    }).catch((error) => {
        res.status(503).send(
            {
                responseCode: 503,
                responseMessage: error.message
            }
        )
    })
});


/**
 * @api {get} /:type/place-details/:placeId/:placeName Gets detailed data of place by id
 * @apiGroup Places
 * @apiName GetsPlaceDetail
 *
 * @apiParam {String} Type Type of place e.g (food,fun,shop)
 * @apiParam {Number} placeId Unique id of place
 * @apiParam {String} placeName Name of place
 *
 *
 * @apiSuccessExample {json} Success
   *                  {
                     *  "name":"string",
 *  "icon":"string",
 *                     "place_id":"string",
 *                     "formatted_address":"string",
 *                     "formatted_phone_number":"string",
 *                     "reviews":[
 *                        {
 *                           "author_name":"string",
 *                           "author_url":"string",
 *                           "language":"string",
 *                           "profile_photo_url":"string",
 *                           "rating":0,
 *                           "time":0,
 *                           "text":"string",
 *                           "relative_time_description":"string"
 *                        }
 *                     ],
 *                     "geometry":{
 *                        "location":{
 *                           "lat":0,
 *                           "lng":0
 *                        }
 *                     },
 *                     "rating":0,
 *                     "vicinity":"string",
 *                     "opening_hours":{
 *                        "open_now":true,
 *                        "weekday_text":[
 *                           "string"
 *                        ]
 *                     },
 *                     "url":"string",
 *                     "website":"string",
 *                     "types":[
 *                        "string"
 *                     ],
 *                     "photos":[
 *                        {
 *                           "height":0,
 *                           "width":0,
 *                           "photo_reference":"string",
 *                           "html_attribution":[
 *                              "string"
 *                           ]
 *                        }
 *                     ]
 *                  }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/:type/place-details/:placeId/:placeName", function (req, res) {
    constants.getDetailPlaceData(req.params.placeId).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
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
    })
});

////////////////////////--------------------------------------------- HANGOUT ROUTES -----------------------------------------------/////////////////////////


/**
 * @api {get} /:type/hangout-place-details/:placeId/:placeName Gets detailed data of hangout
 * @apiGroup Hangout
 *@apiName GetsHangoutDetails
 * @apiParam {String} Type Type of place e.g (food,fun,shop)
 * @apiParam {Number} placeId unique id of place
 * @apiParam {String} placeName Name of place
 *
 *
 * @apiSuccessExample {json} Success
  *                   {
 *                    "responseCode": 200,
 *                    "responseMessage": " Successful",
 *                    "data": {
 *                      "result": {
 *                        "opening_hours": {
 *                          "weekday_text": [
 *                            "Monday: 5:30 PM – 12:00 AM",
 *                            "Tuesday: 6:30 PM – 12:00 AM",
 *                            "Wednesday: 6:30 PM – 12:00 AM",
 *                            "Thursday: 6:30 PM – 12:00 AM",
 *                            "Friday: 6:30 PM – 12:00 AM",
 *                            "Saturday: 6:30 PM – 12:00 AM",
 *                            "Sunday: 6:30 PM – 12:00 AM"
 *                          ]
 *                        },
 *                        "geometry": {
 *                          "location": {
 *                            "lat": 24.845183,
 *                            "lng": 66.990917
 *                          }
 *                        },
 *                        "sliderImages": [
 *                          "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                        ],
 *                        "food": [
 *                          {
 *                            "_id": "5bf3c1f61a6ddc001594656e",
 *                            "category": "food",
 *                            "formatted_address": "Port Grand",
 *                            "formatted_phone_number": "+92",
 *                            "isOnHomepage": false,
 *                            "name": "Wall's",
 *                            "rating": 4,
 *                            "website": "http://www.portgrand.com/food-place/walls/",
 *                            "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fa1e0861e-c414-451d-a5e3-88d703969375.png?alt=media&token=589fd2e4-a3e5-46da-b97f-7630033da731",
 *                            "foodType": "Cafe",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3c1f61a6ddc001594656d"
 *                          }
 *                        ],
 *                        "fun": [
 *                          {
 *                            "_id": "5bf3c3c51a6ddc0015946570",
 *                            "category": "fun",
 *                            "formatted_address": "Port Grand",
 *                            "formatted_phone_number": "+92",
 *                            "isOnHomepage": false,
 *                            "name": "The Grand Circus",
 *                            "rating": 5,
 *                            "website": "http://www.portgrand.com/entertainment-area/grand-circus/",
 *                            "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fe1da377c-6904-4ae9-b1a8-14b4dc9105a7.jpg?alt=media&token=946631eb-bd5f-46bb-bc74-75a0b1050cbc",
 *                            "foodType": "Amusement Park",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3c3c51a6ddc001594656f"
 *                          }
      *                    ],
  *                   "shop": [
   *                         {
    *                          "_id": "5bf3ced01a6ddc001594657e",
     *                         "category": "shop",
      *                       "formatted_phone_number": "+92",
 *                       "isOnHomepage": false,
 *                            "name": "Tiffany's",
 *                            "rating": 5,
 *                            "website": "http://www.portgrand.com/shop-area/tiffanys/",
 *                           "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F576fec22-2f5e-4c46-ac88-8d2c647dbd99.jpg?alt=media&token=b1230e2d-1c8d-44ec-912e-3089fa045a67",
 *                            "foodType": "Clothing Store",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3ced01a6ddc001594657d"
 *                        }
 *                        ],
 *                        "placeImages": [
 *                          "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                        ],
 *                        "_id": "5bc9d34d2c228217dcb95495",
 *                        "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *                        "formatted_phone_number": "+92 336 0657617",
 *                        "name": "Port Grand",
 *                        "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *                        "category": "hangout",
 *                        "rating": 4.6,
 *                        "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *                        "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *                        "website": "http://www.portgrand.com/",
 *                        "__v": 0
 *                      }
 *                    }
 *                  }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */



router.get("/:type/hangout-place-details/:placeId/:placeName", function (req, res) {
    db_read.getHangoutPlaceDetail(req.params.placeId).then((response) => {
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    })
});



/**
 * @api {get} /hangout-places Gets hangout places to be displayed on homepage
 * @apiGroup Hangout
 * @apiName GetsHomepageHangout
 *
 *
 *
 * @apiSuccessExample {json} Success
   *         {
 *           "responseCode": 200,
 *            "responseMessage": " Successful",
 *            "data": {
 *              "results": [
 *                {
 *                  "opening_hours": {
 *                    "weekday_text": [
 *                      "Monday: 5:30 PM – 12:00 AM",
 *                     "Tuesday: 6:30 PM – 12:00 AM",
 *                      "Wednesday: 6:30 PM – 12:00 AM",
 *                      "Thursday: 6:30 PM – 12:00 AM",
 *                      "Friday: 6:30 PM – 12:00 AM",
 *                      "Saturday: 6:30 PM – 12:00 AM",
 *                      "Sunday: 6:30 PM – 12:00 AM"
 *                    ],
 *                    "open_now": true
 *                  },
 *                  "geometry": {
 *                    "location": {
 *                    "lat": 24.845183,
 *                   "lng": 66.990917
 *                    }
 *                  },
 *                  "sliderImages": [
 *                    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                    "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *                    "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *                  ],
 *                  "food": [
 *                    "5bf3bde01a6ddc0015946566",
 *                    "5bf3cc9a1a6ddc001594657a"
 *                  ],
 *                  "fun": [
 *                    "5bf3c9b21a6ddc0015946576",
 *                    "5bf3c8851a6ddc0015946574"
 *                  ],
 *                  "shop": [
 *                      "5bf3cdf31a6ddc001594657c",
 *                    "5bf3cb651a6ddc0015946578"
 *                  ],
 *                  "placeImages": [
 *                    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                    "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *                    "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *                  ],
 *                  "_id": "5bc9d34d2c228217dcb95495",
 *                  "isOnHomepage": true,
 *                  "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *                  "formatted_phone_number": "+92 336 0657617",
 *                  "name": "Port Grand",
 *                  "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *                  "category": "hangout",
 *                  "rating": 4.6,
 *                  "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *                  "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *                  "website": "http://www.portgrand.com/",
 *                  "__v": 0
 *                }
 *              ]
 *            }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/hangout-places", function (req, res) {
    db_read.getHomepageHangoutPlaces().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
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
    })
});


/**
 * @api {get} /all-hangout-places Gets all hangout places
 * @apiGroup Hangout
 * @apiName GetsAllHangout
 *
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *           "responseCode": 200,
 *            "responseMessage": " Successful",
 *            "data": {
 *              "results": [
 *                {
 *                  "opening_hours": {
 *                    "weekday_text": [
 *                      "Monday: 5:30 PM – 12:00 AM",
 *                     "Tuesday: 6:30 PM – 12:00 AM",
 *                      "Wednesday: 6:30 PM – 12:00 AM",
 *                      "Thursday: 6:30 PM – 12:00 AM",
 *                      "Friday: 6:30 PM – 12:00 AM",
 *                      "Saturday: 6:30 PM – 12:00 AM",
 *                      "Sunday: 6:30 PM – 12:00 AM"
 *                    ],
 *                    "open_now": true
 *                  },
 *                  "geometry": {
 *                    "location": {
 *                    "lat": 24.845183,
 *                   "lng": 66.990917
 *                    }
 *                  },
 *                  "sliderImages": [
 *                    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                    "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *                    "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *                  ],
 *                  "food": [
 *                    "5bf3bde01a6ddc0015946566",
 *                    "5bf3cc9a1a6ddc001594657a"
 *                  ],
 *                  "fun": [
 *                    "5bf3c9b21a6ddc0015946576",
 *                    "5bf3c8851a6ddc0015946574"
 *                  ],
 *                  "shop": [
 *                      "5bf3cdf31a6ddc001594657c",
 *                    "5bf3cb651a6ddc0015946578"
 *                  ],
 *                  "placeImages": [
 *                    "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                    "http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg",
 *                    "https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092"
 *                  ],
 *                  "_id": "5bc9d34d2c228217dcb95495",
 *                  "isOnHomepage": true,
 *                  "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *                  "formatted_phone_number": "+92 336 0657617",
 *                  "name": "Port Grand",
 *                  "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *                  "category": "hangout",
 *                  "rating": 4.6,
 *                  "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *                  "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *                  "website": "http://www.portgrand.com/",
 *                  "__v": 0
 *                }
 *              ]
 *            }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/all-hangout-places", function (req, res) {
    db_read.getHangoutPlaces().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
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
    })
});

////////////////////////--------------------------------------------- FEATURED ROUTES -----------------------------------------------/////////////////////////



/**
 * @api {get} /:type/featured-place-details/:placeId/:placeName  Gets detailed data of featured place
 * @apiGroup FeaturedPlaces
 *@apiName GetsFeaturedPlaceDetails
 * @apiParam {String} Type Type of place e.g (food,fun,shop)
 * @apiParam {Number} placeId unique id of place
 * @apiParam {String} placeName Name of place
 *
 *
 * @apiSuccessExample {json} Success
 *                   {
 *                    "responseCode": 200,
 *                    "responseMessage": " Successful",
 *                    "data": {
 *                      "result": {
 *                        "opening_hours": {
 *                          "weekday_text": [
 *                            "Monday: 5:30 PM – 12:00 AM",
 *                            "Tuesday: 6:30 PM – 12:00 AM",
 *                            "Wednesday: 6:30 PM – 12:00 AM",
 *                            "Thursday: 6:30 PM – 12:00 AM",
 *                            "Friday: 6:30 PM – 12:00 AM",
 *                            "Saturday: 6:30 PM – 12:00 AM",
 *                            "Sunday: 6:30 PM – 12:00 AM"
 *                          ]
 *                        },
 *                        "geometry": {
 *                          "location": {
 *                            "lat": 24.845183,
 *                            "lng": 66.990917
 *                          }
 *                        },
 *                        "sliderImages": [
 *                          "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                        ],
 *                        "food": [
 *                          {
 *                            "_id": "5bf3c1f61a6ddc001594656e",
 *                            "category": "food",
 *                            "formatted_address": "Port Grand",
 *                            "formatted_phone_number": "+92",
 *                            "isOnHomepage": false,
 *                            "name": "Wall's",
 *                            "rating": 4,
 *                            "website": "http://www.portgrand.com/food-place/walls/",
 *                            "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fa1e0861e-c414-451d-a5e3-88d703969375.png?alt=media&token=589fd2e4-a3e5-46da-b97f-7630033da731",
 *                            "foodType": "Cafe",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3c1f61a6ddc001594656d"
 *                          }
 *                        ],
 *                        "fun": [
 *                          {
 *                            "_id": "5bf3c3c51a6ddc0015946570",
 *                            "category": "fun",
 *                            "formatted_address": "Port Grand",
 *                            "formatted_phone_number": "+92",
 *                            "isOnHomepage": false,
 *                            "name": "The Grand Circus",
 *                            "rating": 5,
 *                            "website": "http://www.portgrand.com/entertainment-area/grand-circus/",
 *                            "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fe1da377c-6904-4ae9-b1a8-14b4dc9105a7.jpg?alt=media&token=946631eb-bd5f-46bb-bc74-75a0b1050cbc",
 *                            "foodType": "Amusement Park",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3c3c51a6ddc001594656f"
 *                          }
 *                    ],
 *                   "shop": [
 *                         {
 *                          "_id": "5bf3ced01a6ddc001594657e",
 *                         "category": "shop",
 *                       "formatted_phone_number": "+92",
 *                       "isOnHomepage": false,
 *                            "name": "Tiffany's",
 *                            "rating": 5,
 *                            "website": "http://www.portgrand.com/shop-area/tiffanys/",
 *                           "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F576fec22-2f5e-4c46-ac88-8d2c647dbd99.jpg?alt=media&token=b1230e2d-1c8d-44ec-912e-3089fa045a67",
 *                            "foodType": "Clothing Store",
 *                            "google_place_id": "",
 *                            "__v": 0,
 *                            "featured_detail_id": "5bf3ced01a6ddc001594657d"
 *                        }
 *                        ],
 *                        "placeImages": [
 *                          "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4",
 *                        ],
 *                        "_id": "5bc9d34d2c228217dcb95495",
 *                        "formatted_address": "Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi",
 *                        "formatted_phone_number": "+92 336 0657617",
 *                        "name": "Port Grand",
 *                        "bannerImage": "https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11",
 *                        "category": "hangout",
 *                        "rating": 4.6,
 *                        "google_place_id": "Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng",
 *                        "shortDescription": "Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!",
 *                        "website": "http://www.portgrand.com/",
 *                        "__v": 0
 *                      }
 *                    }
 *                  }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/:type/featured-place-details/:placeId/:placeName", function (req, res) {
    db_read.getFoodFeaturedDetail(req.params.placeId).then((response) => {
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    })
});



/**
 * @api {get} /all-featured-places Gets all featured places
 * @apiGroup FeaturedPlaces
 * @apiName GetsAllFeaturedPlaces
 * @apiSuccessExample {json} Success
*                 {
 *                 "responseCode": 200,
 *                 "responseMessage": " Successful",
 *                "data": {
 *                  "results": [
 *                    {
 *                      "opening_hours": {
 *                        "open_now": true
 *                      },
 *                      "geometry": {
 *                        "location": {
 *                          "lat": 24.8267847,
 *                          "lng": 67.03251380000006
 *                        }
 *                      },
 *                      "_id": "5bcdffbe7ba8700015fc1f03",
 *                      "category": "food",
 *                      "formatted_address": "Clifton karachi",
 *                      "isOnHomepage": true,
 *                      "name": "The Chips",
 *                      "rating": 4.5,
 *                      "website": "http",
 *                      "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F5de9eb19-8a9c-4bf0-91bd-08e95b647dae.png?alt=media&token=230589ff-900f-43f2-94b5-63888a136b68",
 *                      "foodType": "Restaurant",
 *                      "google_place_id": "ChIJhyLebrg9sz4RTGFgzwxY5Sw",
 *                      "__v": 0,
 *                      "featured_detail_id": "5bcdffbe7ba8700015fc1f02"
 *                    },
 *                    {
 *                      "opening_hours": {
 *                        "open_now": true
 *                      },
 *                      "geometry": {
 *                        "location": {
 *                          "lat": 24.845183,
 *                          "lng": 66.990917
 *                        }
 *                      },
 *                      "_id": "5bf3b7f51a6ddc0015946560",
 *                      "category": "food",
 *                      "formatted_address": "Port Grand",
 *                      "formatted_phone_number": "+92",
 *                      "isOnHomepage": false,
 *                      "name": "Chai Khana",
 *                      "rating": 4,
 *                      "website": "http://www.portgrand.com/food-place/chai-khana/",
 *                      "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fbd1f01cd-2995-4e3b-a59f-2d17a9e71bfd.jpg?alt=media&token=95eea3c9-4ab7-4726-a336-ec89a21ab044",
 *                      "foodType": "Cafe",
 *                      "google_place_id": "",
 *                      "__v": 0,
 *                      "featured_detail_id": "5bf3b7f51a6ddc001594655f"
 *                    }
 *                  ]
 *                }
 *              }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/all-featured-places", function (req, res) {
    db_read.getFoodFeatured().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
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
    })
});

/**
 * @api {get} /featured-places Gets featured places to be displayed on homepage
 * @apiGroup FeaturedPlaces
 * @apiName GetsHomepageFeaturedPlaces
 * @apiSuccessExample {json} Success
 *                 {
 *                 "responseCode": 200,
 *                 "responseMessage": " Successful",
 *                "data": {
 *                  "results": [
 *                    {
 *                      "opening_hours": {
 *                        "open_now": true
 *                      },
 *                      "geometry": {
 *                        "location": {
 *                          "lat": 24.8267847,
 *                          "lng": 67.03251380000006
 *                        }
 *                      },
 *                      "_id": "5bcdffbe7ba8700015fc1f03",
 *                      "category": "food",
 *                      "formatted_address": "Clifton karachi",
 *                      "isOnHomepage": true,
 *                      "name": "The Chips",
 *                      "rating": 4.5,
 *                      "website": "http",
 *                      "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F5de9eb19-8a9c-4bf0-91bd-08e95b647dae.png?alt=media&token=230589ff-900f-43f2-94b5-63888a136b68",
 *                      "foodType": "Restaurant",
 *                      "google_place_id": "ChIJhyLebrg9sz4RTGFgzwxY5Sw",
 *                      "__v": 0,
 *                      "featured_detail_id": "5bcdffbe7ba8700015fc1f02"
 *                    },
 *                    {
 *                      "opening_hours": {
 *                        "open_now": true
 *                      },
 *                      "geometry": {
 *                        "location": {
 *                          "lat": 24.845183,
 *                          "lng": 66.990917
 *                        }
 *                      },
 *                      "_id": "5bf3b7f51a6ddc0015946560",
 *                      "category": "food",
 *                      "formatted_address": "Port Grand",
 *                      "formatted_phone_number": "+92",
 *                      "isOnHomepage": false,
 *                      "name": "Chai Khana",
 *                      "rating": 4,
 *                      "website": "http://www.portgrand.com/food-place/chai-khana/",
 *                      "bannerImage": "https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fbd1f01cd-2995-4e3b-a59f-2d17a9e71bfd.jpg?alt=media&token=95eea3c9-4ab7-4726-a336-ec89a21ab044",
 *                      "foodType": "Cafe",
 *                      "google_place_id": "",
 *                      "__v": 0,
 *                      "featured_detail_id": "5bf3b7f51a6ddc001594655f"
 *                    }
 *                  ]
 *                }
 *              }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */
router.get("/featured-places", function (req, res) {
    db_read.getHomepageFoodFeatured().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: " Successful",
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
    })
});

module.exports = router;