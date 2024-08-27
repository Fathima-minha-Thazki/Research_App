const mongoose = require('mongoose');

const HarvestSchema = new mongoose.Schema({
  farmerId: { type: String},
  supplierId: { type: String},
  transportId: { type: String},
  sellerId: { type: String},
  location: { type: String, required: true },
  category: { type: String, required: true },
  productName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  totalWeight: { type: Number, required: true },
  numberOfUnits: { type: Number },
  temperature: { type: Number },
  humidity: { type: Number },
  expirydate: {type: Date},
  additionalNotes: { type: String },
  qrCode: {
    type: String, 
  },
});

const Harvest = mongoose.model('Harvest', HarvestSchema);

module.exports = Harvest;
