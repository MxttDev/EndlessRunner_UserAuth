const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  Rank: {
    type: String,
    required: true,
  },
  Wins: {
    type: Number,
    required: true,
  }
  ,
  MatchPlayed: {
    type: Number,
    required: true,
  }
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

module.exports = Leaderboard;
