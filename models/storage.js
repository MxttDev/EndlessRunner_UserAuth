const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
  account_id: {
    type: Number,
    required: true,
    unique: true,
  },
  nickname: {
      type: String,
      required: true
  },
  highest_score: {
      type: Number,
      required: true
  }
});

const Storage = mongoose.model("Storage", storageSchema, "storage");

module.exports = Storage;
