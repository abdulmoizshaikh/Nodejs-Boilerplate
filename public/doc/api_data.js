define({ "api": [
  {
    "type": "get",
    "url": "/admin/reset/:token",
    "title": "Token validation for password reset",
    "group": "Auth",
    "name": "Checks_if_token_is_valid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "token",
            "description": "<p>user token from email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n   \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": {\n\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/admin/forgot-password",
    "title": "Sends email for password reset",
    "group": "Auth",
    "name": "Forgot_Password",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"email\": \"email@example.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n   \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": {\n\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/admin/reset/:token",
    "title": "Resets the password",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "token",
            "description": "<p>user token from email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"password\" : \"anyPassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n   \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": {\n\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Auth",
    "name": "PostAdminResetToken"
  },
  {
    "type": "post",
    "url": "/admin/user-register",
    "title": "Register a new User",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"password\" : \"anyPassword\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n   \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": {\n\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Auth",
    "name": "PostAdminUserRegister"
  },
  {
    "type": "post",
    "url": "/user-login",
    "title": "Signs In The EndUser",
    "group": "Auth",
    "name": "Sign_In",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"email\": \"email@example.com\",\n  \"password\" : \"12345678\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n   \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": {\n             \"auth\": true,\n             \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjFkZTIyZWQ5MzA2MDAxNjRhYzkzYSIsImlhdCI6MTU0NTcyMzQ1MywiZXhwIjoxNTQ1ODA4MDUzfQ.82kXmuOOZAx2Yjt-oJev7dELQ3IyLTntqezVcDVf6eo\",\n             \"user\": {\n                 \"_id\": \"5c21de22ed930600164ac93a\",\n                 \"name\": \"ahshq\",\n                 \"email\": \"123@123.com\",\n                 \"dateOfBirth\": \"Fri Jan 01 1999 00:00:00 GMT+0500 (Pakistan Standard Time)\",\n                 \"gender\": \"Male\",\n                 \"profile_photo_url\": \"https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/1.jpg?alt=media&token=ddacd543-dfab-4697-bc44-c7f49e74bd0d\",\n                 \"time\": \"2018-12-25T07:37:05.415Z\",\n                 \"uuid\": \"764ba4bc-67ba-40bf-8d91-843c2351b3aa\",\n                 \"__v\": 0\n             }\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/portal/hangout/:hangoutId/event/:eventId",
    "title": "Remove a hangout event",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "HangoutId",
            "description": "<p>hangoutId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./restaurantPortal.js",
    "groupTitle": "Event",
    "name": "DeletePortalHangoutHangoutidEventEventid"
  },
  {
    "type": "post",
    "url": "/portal/hangout/:hangoutId/event",
    "title": "Insert a hangout event",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "hangoutId",
            "description": "<p>Hangout id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "  {\n\"photos\" : [\"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png\",\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8iaaHMR-Bz4o-r4zXYAXH-qcyrPzQTP9QkXHKHV30_rME_FC\"],\n          \"video\" : [\"https://www.youtube.com/watch?v=JNaY_b8eZds\"],\n          \"title\" : \"No title needed\",\n          \"description\": \"No title needed\",\n          \"start_time\" : \"1545812558000\",\n          \"end_time\" : \"1545892558000\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./restaurantPortal.js",
    "groupTitle": "Event",
    "name": "PostPortalHangoutHangoutidEvent"
  },
  {
    "type": "put",
    "url": "/portal/hangout/event/:eventId",
    "title": "Update a hangout event",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "EventId",
            "description": "<p>Event id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "  {\n\"photos\" : [\"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png\",\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8iaaHMR-Bz4o-r4zXYAXH-qcyrPzQTP9QkXHKHV30_rME_FC\"],\n          \"video\" : [\"https://www.youtube.com/watch?v=JNaY_b8eZds\"],\n          \"title\" : \"No title needed\",\n          \"description\": \"No title needed\",\n          \"start_time\" : \"1545812558000\",\n          \"end_time\" : \"1545892558000\"\n         }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./restaurantPortal.js",
    "groupTitle": "Event",
    "name": "PutPortalHangoutEventEventid"
  },
  {
    "type": "get",
    "url": "/all-featured-places",
    "title": "Gets all featured places",
    "group": "FeaturedPlaces",
    "name": "GetsAllFeaturedPlaces",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   {\n   \"responseCode\": 200,\n   \"responseMessage\": \" Successful\",\n  \"data\": {\n    \"results\": [\n      {\n        \"opening_hours\": {\n          \"open_now\": true\n        },\n        \"geometry\": {\n          \"location\": {\n            \"lat\": 24.8267847,\n            \"lng\": 67.03251380000006\n          }\n        },\n        \"_id\": \"5bcdffbe7ba8700015fc1f03\",\n        \"category\": \"food\",\n        \"formatted_address\": \"Clifton karachi\",\n        \"isOnHomepage\": true,\n        \"name\": \"The Chips\",\n        \"rating\": 4.5,\n        \"website\": \"http\",\n        \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F5de9eb19-8a9c-4bf0-91bd-08e95b647dae.png?alt=media&token=230589ff-900f-43f2-94b5-63888a136b68\",\n        \"foodType\": \"Restaurant\",\n        \"google_place_id\": \"ChIJhyLebrg9sz4RTGFgzwxY5Sw\",\n        \"__v\": 0,\n        \"featured_detail_id\": \"5bcdffbe7ba8700015fc1f02\"\n      },\n      {\n        \"opening_hours\": {\n          \"open_now\": true\n        },\n        \"geometry\": {\n          \"location\": {\n            \"lat\": 24.845183,\n            \"lng\": 66.990917\n          }\n        },\n        \"_id\": \"5bf3b7f51a6ddc0015946560\",\n        \"category\": \"food\",\n        \"formatted_address\": \"Port Grand\",\n        \"formatted_phone_number\": \"+92\",\n        \"isOnHomepage\": false,\n        \"name\": \"Chai Khana\",\n        \"rating\": 4,\n        \"website\": \"http://www.portgrand.com/food-place/chai-khana/\",\n        \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fbd1f01cd-2995-4e3b-a59f-2d17a9e71bfd.jpg?alt=media&token=95eea3c9-4ab7-4726-a336-ec89a21ab044\",\n        \"foodType\": \"Cafe\",\n        \"google_place_id\": \"\",\n        \"__v\": 0,\n        \"featured_detail_id\": \"5bf3b7f51a6ddc001594655f\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "FeaturedPlaces"
  },
  {
    "type": "get",
    "url": "/:type/featured-place-details/:placeId/:placeName",
    "title": "Gets detailed data of featured place",
    "group": "FeaturedPlaces",
    "name": "GetsFeaturedPlaceDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Type of place e.g (food,fun,shop)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "placeId",
            "description": "<p>unique id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placeName",
            "description": "<p>Name of place</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " {\n  \"responseCode\": 200,\n  \"responseMessage\": \" Successful\",\n  \"data\": {\n    \"result\": {\n      \"opening_hours\": {\n        \"weekday_text\": [\n          \"Monday: 5:30 PM – 12:00 AM\",\n          \"Tuesday: 6:30 PM – 12:00 AM\",\n          \"Wednesday: 6:30 PM – 12:00 AM\",\n          \"Thursday: 6:30 PM – 12:00 AM\",\n          \"Friday: 6:30 PM – 12:00 AM\",\n          \"Saturday: 6:30 PM – 12:00 AM\",\n          \"Sunday: 6:30 PM – 12:00 AM\"\n        ]\n      },\n      \"geometry\": {\n        \"location\": {\n          \"lat\": 24.845183,\n          \"lng\": 66.990917\n        }\n      },\n      \"sliderImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n      ],\n      \"food\": [\n        {\n          \"_id\": \"5bf3c1f61a6ddc001594656e\",\n          \"category\": \"food\",\n          \"formatted_address\": \"Port Grand\",\n          \"formatted_phone_number\": \"+92\",\n          \"isOnHomepage\": false,\n          \"name\": \"Wall's\",\n          \"rating\": 4,\n          \"website\": \"http://www.portgrand.com/food-place/walls/\",\n          \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fa1e0861e-c414-451d-a5e3-88d703969375.png?alt=media&token=589fd2e4-a3e5-46da-b97f-7630033da731\",\n          \"foodType\": \"Cafe\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3c1f61a6ddc001594656d\"\n        }\n      ],\n      \"fun\": [\n        {\n          \"_id\": \"5bf3c3c51a6ddc0015946570\",\n          \"category\": \"fun\",\n          \"formatted_address\": \"Port Grand\",\n          \"formatted_phone_number\": \"+92\",\n          \"isOnHomepage\": false,\n          \"name\": \"The Grand Circus\",\n          \"rating\": 5,\n          \"website\": \"http://www.portgrand.com/entertainment-area/grand-circus/\",\n          \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fe1da377c-6904-4ae9-b1a8-14b4dc9105a7.jpg?alt=media&token=946631eb-bd5f-46bb-bc74-75a0b1050cbc\",\n          \"foodType\": \"Amusement Park\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3c3c51a6ddc001594656f\"\n        }\n  ],\n \"shop\": [\n       {\n        \"_id\": \"5bf3ced01a6ddc001594657e\",\n       \"category\": \"shop\",\n     \"formatted_phone_number\": \"+92\",\n     \"isOnHomepage\": false,\n          \"name\": \"Tiffany's\",\n          \"rating\": 5,\n          \"website\": \"http://www.portgrand.com/shop-area/tiffanys/\",\n         \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F576fec22-2f5e-4c46-ac88-8d2c647dbd99.jpg?alt=media&token=b1230e2d-1c8d-44ec-912e-3089fa045a67\",\n          \"foodType\": \"Clothing Store\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3ced01a6ddc001594657d\"\n      }\n      ],\n      \"placeImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n      ],\n      \"_id\": \"5bc9d34d2c228217dcb95495\",\n      \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n      \"formatted_phone_number\": \"+92 336 0657617\",\n      \"name\": \"Port Grand\",\n      \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n      \"category\": \"hangout\",\n      \"rating\": 4.6,\n      \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n      \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n      \"website\": \"http://www.portgrand.com/\",\n      \"__v\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "FeaturedPlaces"
  },
  {
    "type": "get",
    "url": "/featured-places",
    "title": "Gets featured places to be displayed on homepage",
    "group": "FeaturedPlaces",
    "name": "GetsHomepageFeaturedPlaces",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   {\n   \"responseCode\": 200,\n   \"responseMessage\": \" Successful\",\n  \"data\": {\n    \"results\": [\n      {\n        \"opening_hours\": {\n          \"open_now\": true\n        },\n        \"geometry\": {\n          \"location\": {\n            \"lat\": 24.8267847,\n            \"lng\": 67.03251380000006\n          }\n        },\n        \"_id\": \"5bcdffbe7ba8700015fc1f03\",\n        \"category\": \"food\",\n        \"formatted_address\": \"Clifton karachi\",\n        \"isOnHomepage\": true,\n        \"name\": \"The Chips\",\n        \"rating\": 4.5,\n        \"website\": \"http\",\n        \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F5de9eb19-8a9c-4bf0-91bd-08e95b647dae.png?alt=media&token=230589ff-900f-43f2-94b5-63888a136b68\",\n        \"foodType\": \"Restaurant\",\n        \"google_place_id\": \"ChIJhyLebrg9sz4RTGFgzwxY5Sw\",\n        \"__v\": 0,\n        \"featured_detail_id\": \"5bcdffbe7ba8700015fc1f02\"\n      },\n      {\n        \"opening_hours\": {\n          \"open_now\": true\n        },\n        \"geometry\": {\n          \"location\": {\n            \"lat\": 24.845183,\n            \"lng\": 66.990917\n          }\n        },\n        \"_id\": \"5bf3b7f51a6ddc0015946560\",\n        \"category\": \"food\",\n        \"formatted_address\": \"Port Grand\",\n        \"formatted_phone_number\": \"+92\",\n        \"isOnHomepage\": false,\n        \"name\": \"Chai Khana\",\n        \"rating\": 4,\n        \"website\": \"http://www.portgrand.com/food-place/chai-khana/\",\n        \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fbd1f01cd-2995-4e3b-a59f-2d17a9e71bfd.jpg?alt=media&token=95eea3c9-4ab7-4726-a336-ec89a21ab044\",\n        \"foodType\": \"Cafe\",\n        \"google_place_id\": \"\",\n        \"__v\": 0,\n        \"featured_detail_id\": \"5bf3b7f51a6ddc001594655f\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "FeaturedPlaces"
  },
  {
    "type": "update",
    "url": "/admin/hangout/:id",
    "title": "",
    "group": "Hangout",
    "name": "Delete_Hangout_Event",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": \"Hangout Place , Port Grand , Successfully updated\"\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"opening_hours\": {\n        \"weekday_text\": [\n            \"Monday: 5:30 PM \\u2013 12:00 AM\",\n            \"Tuesday: 6:30 PM \\u2013 12:00 AM\",\n            \"Wednesday: 6:30 PM \\u2013 12:00 AM\",\n            \"Thursday: 6:30 PM \\u2013 12:00 AM\",\n            \"Friday: 6:30 PM \\u2013 12:00 AM\",\n            \"Saturday: 6:30 PM \\u2013 12:00 AM\",\n            \"Sunday: 6:30 PM \\u2013 12:00 AM\"\n        ]\n    },\n  \"food\": [],\n    \"fun\": [],\n    \"shop\": [],\n    \"geometry\": {\n        \"location\": {\n            \"lat\": 24.845183,\n            \"lng\": 66.990917\n        }\n    },\n    \"isOnHomepage\": true,\n    \"sliderImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n        \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n        \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n    ],\n    \"placeImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n        \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n        \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n    ],\n    \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n    \"formatted_phone_number\": \"+92 336 0657617\",\n    \"name\": \"Port Grand\",\n    \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n    \"category\": \"hangout\",\n    \"rating\": 4.6,\n    \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n    \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan\\u2019s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n    \"website\": \"http://www.portgrand.com/\",\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "delete",
    "url": "/admin/hangout/:id",
    "title": "",
    "group": "Hangout",
    "name": "Delete_Hangout_Event",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": \"Hangout Place , Port Grand , Successfully deleted\"\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "get",
    "url": "/all-hangout-places",
    "title": "Gets all hangout places",
    "group": "Hangout",
    "name": "GetsAllHangout",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"responseCode\": 200,\n   \"responseMessage\": \" Successful\",\n   \"data\": {\n     \"results\": [\n       {\n         \"opening_hours\": {\n           \"weekday_text\": [\n             \"Monday: 5:30 PM – 12:00 AM\",\n            \"Tuesday: 6:30 PM – 12:00 AM\",\n             \"Wednesday: 6:30 PM – 12:00 AM\",\n             \"Thursday: 6:30 PM – 12:00 AM\",\n             \"Friday: 6:30 PM – 12:00 AM\",\n             \"Saturday: 6:30 PM – 12:00 AM\",\n             \"Sunday: 6:30 PM – 12:00 AM\"\n           ],\n           \"open_now\": true\n         },\n         \"geometry\": {\n           \"location\": {\n           \"lat\": 24.845183,\n          \"lng\": 66.990917\n           }\n         },\n         \"sliderImages\": [\n           \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n           \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n           \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n         ],\n         \"food\": [\n           \"5bf3bde01a6ddc0015946566\",\n           \"5bf3cc9a1a6ddc001594657a\"\n         ],\n         \"fun\": [\n           \"5bf3c9b21a6ddc0015946576\",\n           \"5bf3c8851a6ddc0015946574\"\n         ],\n         \"shop\": [\n             \"5bf3cdf31a6ddc001594657c\",\n           \"5bf3cb651a6ddc0015946578\"\n         ],\n         \"placeImages\": [\n           \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n           \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n           \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n         ],\n         \"_id\": \"5bc9d34d2c228217dcb95495\",\n         \"isOnHomepage\": true,\n         \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n         \"formatted_phone_number\": \"+92 336 0657617\",\n         \"name\": \"Port Grand\",\n         \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n         \"category\": \"hangout\",\n         \"rating\": 4.6,\n         \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n         \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n         \"website\": \"http://www.portgrand.com/\",\n         \"__v\": 0\n       }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "get",
    "url": "/:type/hangout-place-details/:placeId/:placeName",
    "title": "Gets detailed data of hangout",
    "group": "Hangout",
    "name": "GetsHangoutDetails",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Type of place e.g (food,fun,shop)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "placeId",
            "description": "<p>unique id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placeName",
            "description": "<p>Name of place</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " {\n  \"responseCode\": 200,\n  \"responseMessage\": \" Successful\",\n  \"data\": {\n    \"result\": {\n      \"opening_hours\": {\n        \"weekday_text\": [\n          \"Monday: 5:30 PM – 12:00 AM\",\n          \"Tuesday: 6:30 PM – 12:00 AM\",\n          \"Wednesday: 6:30 PM – 12:00 AM\",\n          \"Thursday: 6:30 PM – 12:00 AM\",\n          \"Friday: 6:30 PM – 12:00 AM\",\n          \"Saturday: 6:30 PM – 12:00 AM\",\n          \"Sunday: 6:30 PM – 12:00 AM\"\n        ]\n      },\n      \"geometry\": {\n        \"location\": {\n          \"lat\": 24.845183,\n          \"lng\": 66.990917\n        }\n      },\n      \"sliderImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n      ],\n      \"food\": [\n        {\n          \"_id\": \"5bf3c1f61a6ddc001594656e\",\n          \"category\": \"food\",\n          \"formatted_address\": \"Port Grand\",\n          \"formatted_phone_number\": \"+92\",\n          \"isOnHomepage\": false,\n          \"name\": \"Wall's\",\n          \"rating\": 4,\n          \"website\": \"http://www.portgrand.com/food-place/walls/\",\n          \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fa1e0861e-c414-451d-a5e3-88d703969375.png?alt=media&token=589fd2e4-a3e5-46da-b97f-7630033da731\",\n          \"foodType\": \"Cafe\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3c1f61a6ddc001594656d\"\n        }\n      ],\n      \"fun\": [\n        {\n          \"_id\": \"5bf3c3c51a6ddc0015946570\",\n          \"category\": \"fun\",\n          \"formatted_address\": \"Port Grand\",\n          \"formatted_phone_number\": \"+92\",\n          \"isOnHomepage\": false,\n          \"name\": \"The Grand Circus\",\n          \"rating\": 5,\n          \"website\": \"http://www.portgrand.com/entertainment-area/grand-circus/\",\n          \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2Fe1da377c-6904-4ae9-b1a8-14b4dc9105a7.jpg?alt=media&token=946631eb-bd5f-46bb-bc74-75a0b1050cbc\",\n          \"foodType\": \"Amusement Park\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3c3c51a6ddc001594656f\"\n        }\n  ],\n \"shop\": [\n       {\n        \"_id\": \"5bf3ced01a6ddc001594657e\",\n       \"category\": \"shop\",\n     \"formatted_phone_number\": \"+92\",\n     \"isOnHomepage\": false,\n          \"name\": \"Tiffany's\",\n          \"rating\": 5,\n          \"website\": \"http://www.portgrand.com/shop-area/tiffanys/\",\n         \"bannerImage\": \"https://firebasestorage.googleapis.com/v0/b/adminpanel-ee0a1.appspot.com/o/images%2F576fec22-2f5e-4c46-ac88-8d2c647dbd99.jpg?alt=media&token=b1230e2d-1c8d-44ec-912e-3089fa045a67\",\n          \"foodType\": \"Clothing Store\",\n          \"google_place_id\": \"\",\n          \"__v\": 0,\n          \"featured_detail_id\": \"5bf3ced01a6ddc001594657d\"\n      }\n      ],\n      \"placeImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n      ],\n      \"_id\": \"5bc9d34d2c228217dcb95495\",\n      \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n      \"formatted_phone_number\": \"+92 336 0657617\",\n      \"name\": \"Port Grand\",\n      \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n      \"category\": \"hangout\",\n      \"rating\": 4.6,\n      \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n      \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n      \"website\": \"http://www.portgrand.com/\",\n      \"__v\": 0\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "get",
    "url": "/hangout-places",
    "title": "Gets hangout places to be displayed on homepage",
    "group": "Hangout",
    "name": "GetsHomepageHangout",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"responseCode\": 200,\n   \"responseMessage\": \" Successful\",\n   \"data\": {\n     \"results\": [\n       {\n         \"opening_hours\": {\n           \"weekday_text\": [\n             \"Monday: 5:30 PM – 12:00 AM\",\n            \"Tuesday: 6:30 PM – 12:00 AM\",\n             \"Wednesday: 6:30 PM – 12:00 AM\",\n             \"Thursday: 6:30 PM – 12:00 AM\",\n             \"Friday: 6:30 PM – 12:00 AM\",\n             \"Saturday: 6:30 PM – 12:00 AM\",\n             \"Sunday: 6:30 PM – 12:00 AM\"\n           ],\n           \"open_now\": true\n         },\n         \"geometry\": {\n           \"location\": {\n           \"lat\": 24.845183,\n          \"lng\": 66.990917\n           }\n         },\n         \"sliderImages\": [\n           \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n           \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n           \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n         ],\n         \"food\": [\n           \"5bf3bde01a6ddc0015946566\",\n           \"5bf3cc9a1a6ddc001594657a\"\n         ],\n         \"fun\": [\n           \"5bf3c9b21a6ddc0015946576\",\n           \"5bf3c8851a6ddc0015946574\"\n         ],\n         \"shop\": [\n             \"5bf3cdf31a6ddc001594657c\",\n           \"5bf3cb651a6ddc0015946578\"\n         ],\n         \"placeImages\": [\n           \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n           \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n           \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n         ],\n         \"_id\": \"5bc9d34d2c228217dcb95495\",\n         \"isOnHomepage\": true,\n         \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n         \"formatted_phone_number\": \"+92 336 0657617\",\n         \"name\": \"Port Grand\",\n         \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n         \"category\": \"hangout\",\n         \"rating\": 4.6,\n         \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n         \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan’s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n         \"website\": \"http://www.portgrand.com/\",\n         \"__v\": 0\n       }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "post",
    "url": "/admin/hangout",
    "title": "",
    "group": "Hangout",
    "name": "Insert_Hangout_Event",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"opening_hours\": {\n        \"weekday_text\": [\n            \"Monday: 5:30 PM \\u2013 12:00 AM\",\n            \"Tuesday: 6:30 PM \\u2013 12:00 AM\",\n            \"Wednesday: 6:30 PM \\u2013 12:00 AM\",\n            \"Thursday: 6:30 PM \\u2013 12:00 AM\",\n            \"Friday: 6:30 PM \\u2013 12:00 AM\",\n            \"Saturday: 6:30 PM \\u2013 12:00 AM\",\n            \"Sunday: 6:30 PM \\u2013 12:00 AM\"\n        ]\n    },\n  \"food\": [],\n    \"fun\": [],\n    \"shop\": [],\n    \"geometry\": {\n        \"location\": {\n            \"lat\": 24.845183,\n            \"lng\": 66.990917\n        }\n    },\n    \"isOnHomepage\": true,\n    \"sliderImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n        \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n        \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n    ],\n    \"placeImages\": [\n        \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/44571558_2108734215843412_8984528424487878656_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=248ef91ce29d21782a8cd08d757a1148&oe=5C57E6B4\",\n        \"http://www.portgrand.com/wp-content/uploads/2018/05/01-Promenade-3-1132x620.jpg\",\n        \"https://media-cdn.tripadvisor.com/media/photo-o/02/63/f9/cf/night-at-port-grand.jpg?cja=10834514&cjp=8230919&cjs=v0304000103750ac479cb83574987abfffc950497514f&m=13092\"\n    ],\n    \"formatted_address\": \"Road Opposite PNSC buliding، Port Grand Food St, West Wharf, Karachi\",\n    \"formatted_phone_number\": \"+92 336 0657617\",\n    \"name\": \"Port Grand\",\n    \"bannerImage\": \"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/43036323_2086768998039934_908030810215415808_n.jpg?_nc_cat=1&_nc_ht=scontent.fkhi1-1.fna&oh=3844b6d3b789ef3c17ae5eec3f0d8cc0&oe=5C46DA11\",\n    \"category\": \"hangout\",\n    \"rating\": 4.6,\n    \"google_place_id\": \"Em7ZvtmI2LHZuSDar9ix24zZhtqIINmB2YjaiCDYp9iz2bnYsduM2bnYjCBXZXN0IFdoYXJmLCDaqdix2KfahtuMLCDYttmE2Lkg2qnYsdin2obbjCwg2LPZhtiv2r7YjCDZvtin2qnYs9iq2KfZhiIuKiwKFAoSCRPhkIEHFrM-EYmQtbW2jvdBEhQKEgnJYjaJCRazPhEyqFCTQQl3ng\",\n    \"shortDescription\": \"Port Grand is one of the finest developments that celebrates the city of Karachi with diverse concepts in food, art, leisure, entertainment, adventure, fun and shopping, A cultural hub on Pakistan\\u2019s Seaport, celebrations at Port Grand are a truly delightful experience!\",\n    \"website\": \"http://www.portgrand.com/\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"responseCode\": 201,\n     \"responseMessage\": \"Success\",\n     \"data\": {\n         \"result\": \"Hangout Place , Port Grand , Successfully Created\"\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./admin.js",
    "groupTitle": "Hangout"
  },
  {
    "type": "get",
    "url": "/:type/:lat/:lon",
    "title": "Gets nearby places by co-ordinates",
    "name": "GetNearbyPlaces",
    "group": "Places",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Type of place e.g (food,fun,shop)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude of place</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lon",
            "description": "<p>Longitude of place</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "          [\n{\n               \"name\":\"string\",\n               \"icon\":\"string\",\n               \"place_id\":\"string\",\n               \"rating\":0,\n               \"vicinity\":\"string\",\n               \"opening_hours\":{\n                  \"open_now\":true\n               },\n               \"types\":[\n                  \"string\"\n               ],\n               \"photos\":[\n                  {\n                     \"height\":0,\n                     \"width\":0,\n                     \"photo_reference\":\"string\",\n                     \"html_attribution\":[\n                        \"string\"\n                     ]\n                  }\n               ]\n            }\n          ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "Places"
  },
  {
    "type": "get",
    "url": "/:type/place-details/:placeId/:placeName",
    "title": "Gets detailed data of place by id",
    "group": "Places",
    "name": "GetsPlaceDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Type of place e.g (food,fun,shop)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "placeId",
            "description": "<p>Unique id of place</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "placeName",
            "description": "<p>Name of place</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "                {\n\"name\":\"string\",\n\"icon\":\"string\",\n                   \"place_id\":\"string\",\n                   \"formatted_address\":\"string\",\n                   \"formatted_phone_number\":\"string\",\n                   \"reviews\":[\n                      {\n                         \"author_name\":\"string\",\n                         \"author_url\":\"string\",\n                         \"language\":\"string\",\n                         \"profile_photo_url\":\"string\",\n                         \"rating\":0,\n                         \"time\":0,\n                         \"text\":\"string\",\n                         \"relative_time_description\":\"string\"\n                      }\n                   ],\n                   \"geometry\":{\n                      \"location\":{\n                         \"lat\":0,\n                         \"lng\":0\n                      }\n                   },\n                   \"rating\":0,\n                   \"vicinity\":\"string\",\n                   \"opening_hours\":{\n                      \"open_now\":true,\n                      \"weekday_text\":[\n                         \"string\"\n                      ]\n                   },\n                   \"url\":\"string\",\n                   \"website\":\"string\",\n                   \"types\":[\n                      \"string\"\n                   ],\n                   \"photos\":[\n                      {\n                         \"height\":0,\n                         \"width\":0,\n                         \"photo_reference\":\"string\",\n                         \"html_attribution\":[\n                            \"string\"\n                         ]\n                      }\n                   ]\n                }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 503 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./places.js",
    "groupTitle": "Places"
  }
] });
