let mongoose = require("mongoose");

const User = mongoose.model('User');


module.exports = function(app) {
    app.get("/users/:name", (req, res) => {
        User.find({name: req.params.name.toLowerCase()}).sort().limit(1).exec(function(err, users) {
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
    	
