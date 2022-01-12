const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const User = require("./models/user")

//Connect to mongo database
mongoose.connect("mongodb+srv://admin:zraJhUoTCuZi2pxkTukVMANej7qNWNMo6kIxZTsv0PcGhmPLJnAWOWm6rf0xn4Af3xxxUwNrg1FE0GKqqeBbEluzu80NowcWLdHeQXzfcQ8bTIFs4gOZh2WYz4oQYTzO@target.xqtl8.mongodb.net/database?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Mongo!");
}).catch((err) => {
  console.log("Erro connecting to Mongo", err);
});

require('./models/user.js');
require('./routes/users/steamID')(app);
require('./routes/users')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/users/create", (req, res) => {
  const user = new User({
    name: req.body.name,
    steamId: req.body.steamId,
  })
	user.save(function (err, user) {
    if (err) { return next(err) }
    res.json(201, user)
  })
})



app.listen("3000", ()=> {
	console.log('listening on port 3000')
})