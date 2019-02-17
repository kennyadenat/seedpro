const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PuritySchema = new Schema({
  regionid: {
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
  crop: {
    type: String,
    required: true
  },
  variety: {
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
  purityscorekg: {
    type: Number,
    required: true
  },
  purityscoreper: {
    type: Number,
    required: true
  },
  innertscorekg: {
    type: Number,
    required: true
  },
  innertscoreper: {
    type: Number,
    required: true
  },
  region: String,
  reportingofficer: String,
  regionalhead: String

}, {
  timestamps: true
})




module.exports = Purity = mongoose.model("purity", PuritySchema);