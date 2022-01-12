let mongoose = require("mongoose");

const User = mongoose.model('User');



module.exports = function(app) {
  app.get("/users/:steamid", (req, res) => {
  	User.find({}, 'steamId', function(err, someValue){
      if(err) return next(err);
      res.send(someValue);
		})
	})
};
    	
