const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const User = require("./models/user")
const Store = require('./models/store')
const Leaderboard = require('./models/leaderboard')

//Connect to mongo database
mongoose.connect("mongodb+srv://admin:zraJhUoTCuZi2pxkTukVMANej7qNWNMo6kIxZTsv0PcGhmPLJnAWOWm6rf0xn4Af3xxxUwNrg1FE0GKqqeBbEluzu80NowcWLdHeQXzfcQ8bTIFs4gOZh2WYz4oQYTzO@target.xqtl8.mongodb.net/database?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Mongo!");
}).catch((err) => {
  console.log("Error connecting to Mongo", err);
});

require('./routes/users/steamID')(app);
require('./routes/users/users')(app);
require('./routes/shop/getShopItems')(app);
require('./routes/leaderboard/top')(app);


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

app.post("/store/add", (req, res) => {
  const store = new Store({
    productName: req.body.productName,
    description: req.body.description,
  })
	store.save(function (err, store) {
    if (err) { return res.send(err) }
    res.json(201, store)
  })
})

app.post("/leaderboard/add", (req, res) => {
  const leaderboard = new Leaderboard({
    productName: req.body.productName,
    description: req.body.description,
  })
	leaderboard.save(function (err, leaderboard) {
    if (err) { return res.send(err) }
    res.json(201, leaderboard)
  })
})

app.listen("3000", ()=> {
	console.log('listening on port 3000')
})