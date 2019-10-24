let  express = require('express'),
    router  = express.Router(),
    db_read = require('../misceallenous/db-functions/read'),
    db_insert = require('../misceallenous/db-functions/insert'),
    db_update = require('../misceallenous/db-functions/update'),
    db_delete = require('../misceallenous/db-functions/delete'),
    constants = require("../misceallenous/constants");


router.post('/sms', function (req, res) {
    constants.sendSMS(req.body.message , req.body.phone).then((response) => {
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




router.post('/restaurant-login', function (req, res) {

    db_read.authenticateRestaurantUser(req.body).then((response) => {
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


router.put("/update-password" ,function (req, res) {
    db_update.updatePlacePortalPassword(req.params.id, req.body).then((response) => {
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

router.get('/all-featured-places', function (req, res) {
    db_read.getAllFeaturedPlacesLogin().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
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


router.post('/restaurant-register', function (req, res) {
    db_insert.insertRestaurantUser(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result:  response

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


////////////////////////////////////////////////////  HANGOUT EVENT  /////////////////////////////////////////////////////////////

// INSERT


/**
 * @api {post} /portal/hangout/:hangoutId/event Insert a hangout event
 * @apiGroup Event
 * @apiParam {id} hangoutId Hangout id
 * @apiParamExample {json} Input
             *      {
 *    "photos" : ["https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8iaaHMR-Bz4o-r4zXYAXH-qcyrPzQTP9QkXHKHV30_rME_FC"],
 *              "video" : ["https://www.youtube.com/watch?v=JNaY_b8eZds"],
 *              "title" : "No title needed",
 *              "description": "No title needed",
 *              "start_time" : "1545812558000",
 *              "end_time" : "1545892558000"
            }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post("/hangout/:hangoutId/event", function (req, res) {
    db_insert.insertHangoutEvent(req.params.hangoutId ,req.body).then((response) => {
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
 * @api {put} /portal/hangout/event/:eventId Update a hangout event
 * @apiGroup Event
 * @apiParam {id} EventId Event id
 * @apiParamExample {json} Input
 *      {
 *    "photos" : ["https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8iaaHMR-Bz4o-r4zXYAXH-qcyrPzQTP9QkXHKHV30_rME_FC"],
 *              "video" : ["https://www.youtube.com/watch?v=JNaY_b8eZds"],
 *              "title" : "No title needed",
 *              "description": "No title needed",
 *              "start_time" : "1545812558000",
 *              "end_time" : "1545892558000"
            }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */

// UPDATE

router.put("/hangout/event/:eventId", function (req, res) {
    db_update.updateHangoutPlaceEvent(req.params.eventId ,req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: "Hangout Place , " + response + " ,event successfully updated"
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

/**
 * @api {delete} /portal/hangout/:hangoutId/event/:eventId Remove a hangout event
 * @apiGroup Event
 * @apiParam {id} id Event id
 * @apiParam {id} HangoutId hangoutId
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */

router.delete("/hangout/:hangoutId/event/:eventId", function (req, res) {
    db_delete.deleteHangoutPlaceEvent(req.params.hangoutId,req.params.eventId).then((response) => {
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


module.exports = router;