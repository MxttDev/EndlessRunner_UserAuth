const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  account_id: {
    type: Number,
    required: true,
    unique: true,
  }
});

const Data = mongoose.model("Data", dataSchema, "state");

module.exports = Data;
