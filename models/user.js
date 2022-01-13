const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  steamId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  totalKills: {
    type: Number,
    required: true,
  },
  totalDeaths: {
    type: Number,
    required: true,
  },
  totalWins: {
    type: Number,
    required: true,
  },
  totalLoss: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  items: {
    type: [String],
    required: true,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
