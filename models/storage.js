const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
  account_id: {
    type: Number,
    required: true,
    unique: true,
  },
  engine: [{
      name: String,
      values: mongoose.Schema.Types.Mixed
  }]
  },
});

const Storage = mongoose.model("Storage", storageSchema, "storage");

module.exports = Storage;
