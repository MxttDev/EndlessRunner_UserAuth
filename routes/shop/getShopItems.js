let mongoose = require("mongoose");

const User = mongoose.model('User');


module.exports = function(app) {
    app.get("/shop", (req, res) => {
        User.find({}, '-_id', function(err, items) {

        })
    })
};
    	
