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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.send(err);
      } else {
        res.json(users)
      }
    })
  })
  
app.post("/users/create", (req, res) => {
  const user = new User({
    name: req.body.name,
    steamId: req.body.steamId,
  })
  user.save((err, user) => {
    if (err) {
      res.send(err);
    }
    console.log("user Added");
    res.json(user);
  });

})



app.listen("3000", ()=> {
    console.log('running on port 3000')
} )