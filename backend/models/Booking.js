const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startTime: Date,
  durationHours: Number,
  totalAmount: Number,
  status: { type: String, enum: ['pending','accepted','completed','cancelled'], default: 'pending' }
});
module.exports = mongoose.model('Booking', BookingSchema);
