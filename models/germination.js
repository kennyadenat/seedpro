const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GerminationSchema = new Schema({

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
  normal: Number,
  abnormal: Number,
  hard: Number,
  dead: Number,
  germinationpercentage: String,
  remarks: String,
  analysiscount: [{
    type: Schema.Types.ObjectId,
    ref: "analysiscount"
  }],
  region: String,
  reportingofficer: String,
  regionalhead: String
})


module.exports = Germination = mongoose.model("germination", GerminationSchema);