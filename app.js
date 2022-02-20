const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const User = require("./models/user")

//Connect to mongo database
mongoose.connect("mongodb+srv://admin:zraJhUoTCuZi2pxkTukVMANej7qNWNMo6kIxZTsv0PcGhmPLJnAWOWm6rf0xn4Af3xxxUwNrg1FE0GKqqeBbEluzu80NowcWLdHeQXzfcQ8bTIFs4gOZh2WYz4oQYTzO@userstorage.v7p3x.mongodb.net/storage?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to Mongo!");
}).catch((err) => {
  console.log("Error connecting to Mongo", err);
});

require('./routes/users/getSpecificUsername')(app);
require('./routes/users/users')(app);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/users/create", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  })
	user.save(function (err, user) {
    if (err) { return next(err) }
    res.status(201).json(user)
  })
})


const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});