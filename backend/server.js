const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const providerRoutes = require('./routes/providers');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Mongo connected');
  app.listen(PORT, () => console.log('Server running on', PORT));
})
.catch(err => console.error(err));
