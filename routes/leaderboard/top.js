let mongoose = require("mongoose");

const Leaderboard = mongoose.model('Leaderboard');

module.exports = function(app) {
    app.get("/leaderboard", (req, res) => {
        
  	    Leaderboard.find({}, '-_id', function(err, someValue) {

            if(err) return next(err);

            res.send(someValue);
		})
	})
};
    	
