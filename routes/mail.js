 var  express = require('express'),
     router  = express.Router(),
     constants = require("../misceallenous/constants"),
     nodeMailer = require('nodemailer');


// giving access to nodeMailer for logging into mail account
var mailTransporter = nodeMailer.createTransport({
    service : 'gmail',
    auth: {
        user: "haqtaha@gmail.com",
        pass: 'mvibckbmjwpddzsj'
    }
});

//POST- Send the filled contact us form to mail
router.post("/contact-us", function (req, res) {
    var contact = req.body;
    const mailOptions = {
        from: contact.email, // sender address
        to: 'haqtaha@gmail.com', // list of receivers
        subject: 'Contact Info', // Subject line
        html: contact.name + " " + contact.email + " " + contact.contact + " " + contact.subject + " " + contact.message + '<p>contact</p>'// plain text body
    };
    console.log(mailOptions)
    mailTransporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else{
            res.status(201).send(
                {
                    responseCode: 200,
                    responseMessage: constants.responseMessages.Success,
                    data: {
                        result: constants.responseMessages.Success
                    }
                }
            )
        }
    });
});


//POST -- WILL SEND MAIL ALONG WITH NEW LISTING FORM DATA
router.post("/addListing", function (req, res) {

    var newListing = req.body;
    const mailOptions = {
        from: 'foodfunshopinc@gmail.com', // sender address
        to: 'foodfunshopinc@gmail.com', // list of receivers
        subject: 'Contact Info', // Subject line
        html: newListing.name + " " + newListing.location + " " + newListing.contact + '<p>contact</p>'// plain text body
    };
    mailTransporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            res.send({ 'success' : '200'});
    });
});

 module.exports = router;