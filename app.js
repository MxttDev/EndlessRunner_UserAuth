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
    username: req.body.username.toLowerCase(),
    password: req.body.password.toLowerCase(),
    account_id: req.body.account_id.toLowerCase(),
  })
  if (user) {
    const Player = mongoose.model('User');
    Player.find({ 'username': req.body.username.toLowerCase() }, function (err, result) {

      if(err) return next(err);

      if (result.length == 0) {

        Player.find({ 'account_id': req.body.account_id.toLowerCase() }, function (errs, results) {
          if(errs) return next(errs);

          if (results.length == 0) {
            user.save();
            res.send('User Created');
          } else {
            res.send('Already created')
          }
          res.end();
        });
        
      } 
      res.end();
    });
  }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});