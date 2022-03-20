let mongoose = require("mongoose");

const Data = mongoose.model('Data');


module.exports = function(app) {
    app.get("/users/:username", (req, res) => {
      Data.find({username: req.params.username.toLowerCase()}, '-_id').sort().limit(1).exec(function(err, users) {
            var user = users[0]

            if(err) return res.json({error: true});
                
            if (user) {
              res.send(user)
            } else {
              res.json({notFound: true});
          }
    
		    })
    })
};
    	
