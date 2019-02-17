const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SeedCompanySchema = new Schema({

  name: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  reportingofficer: {
    type: String,
    required: true
  },
  regionalhead: {
    type: String,
    required: true
  },
})


module.exports = SeedCompany = mongoose.model("seedcompany", SeedCompanySchema);