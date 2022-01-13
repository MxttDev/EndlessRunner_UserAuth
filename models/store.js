const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
