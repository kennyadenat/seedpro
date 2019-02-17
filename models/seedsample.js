const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const germination = require('./germination');
const purity = require('./purity');


const SeedSampleSchema = new Schema({

  seedcompanyid: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  referenceno: {
    type: String,
    required: true
  },
  lotno: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  seedclass: {
    type: String,
    required: true
  },
  crop: {
    type: String,
    required: true
  },
  variety: {
    type: String,
    required: true
  },
  submittingofficer: {
    type: String,
    required: true
  },
  receivingofficer: {
    type: String,
    required: true
  },
  submittedsample: {
    type: Number,
    required: true
  },
  datereceived: {
    type: Date,
    default: Date.now
  },
  purity: {
    type: Schema.Types.ObjectId,
    ref: "purity"
  },
  germination: {
    type: Schema.Types.ObjectId,
    ref: "germination"
  }

})
purity

module.exports = SeedSample = mongoose.model("seedsample", SeedSampleSchema);