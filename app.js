let express = require("express"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express(),
    constants = require('./misceallenous/constants'),
    cors = require('cors'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

let mailRoutes = require("./routes/mail"),
    placesRoutes = require("./routes/places"),
    adminRoutes = require("./routes/admin"),
    restaurantPortal = require('./routes/restaurantPortal');
// App Config
// mongoose.connect("mongodb://tahahaq:qweasdzxc123@ds241869.mlab.com:41869/ffs_v3-admin");

// mongoose.connect("mongodb://tahahaq:GadVarisIckMe3U@ds125402.mlab.com:25402/foodfunshop_v2");
mongoose.connect("mongodb://localhost/foodfunshop_v3");
app.use(bodyParser.json({extended: true}));
app.use(expressSanitizer());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

// SESSION CONFIG


app.use('/portal', restaurantPortal);
app.use(mailRoutes);
app.use("/places", placesRoutes);
app.use("/admin", adminRoutes);

const port = process.env.PORT || 9000;
app.listen(port);

console.log(`FoodFunShop listening on ${port}`);

module.exports.app = app;