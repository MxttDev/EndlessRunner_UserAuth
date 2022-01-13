let mongoose = require("mongoose");

const User = mongoose.model('User');

module.exports = function(app) {
    app.get("/users", (req, res) => {
        
  	    User.find({}, '-_id', function(err, someValue) {

            if(err) return next(err);

            res.send(someValue);
		})
	})
};
    