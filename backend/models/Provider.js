const mongoose = require('mongoose');
const ProviderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  skills: [String],
  pricePerHour: Number,
  location: {
    city: String,
    lat: Number,
    lng: Number
  },
  available: { type: Boolean, default: true },
  rating: { type: Number, default: 5 },
  reviews: [{ user: String, text: String, rating: Number }]
});
module.exports = mongoose.model('Provider', ProviderSchema);
