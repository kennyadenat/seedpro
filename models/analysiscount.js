const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AnalysisSchema = new Schema({

  germinationid: {
    type: String,
    required: true
  },
  analysistype: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
})


module.exports = AnalysisCount = mongoose.model("analysiscount", AnalysisSchema);