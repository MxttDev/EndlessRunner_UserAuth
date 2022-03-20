let mongoose = require("mongoose");

const Data = mongoose.model('Data');

module.exports = function(app) {
    app.get("/users", (req, res) => {
        
        Data.find({}, '-_id', function(err, someValue) {

            if(err) return next(err);

            res.send(someValue);
		})
	})
};
    