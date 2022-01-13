let mongoose = require("mongoose");

const Store = mongoose.model('Store');

module.exports = function(app) {
    app.get("/store", (req, res) => {
        
  	    Store.find({}, '-_id', function(err, someValue) {

            if(err) return next(err);

            res.send(someValue);
		})
	})
};
    	
