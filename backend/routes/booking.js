const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req,res)=>{
  // minimal validation
  const b = new Booking(req.body);
  await b.save();
  // here you would trigger provider notification
  res.json(b);
});

router.get('/customer/:id', async (req,res)=>{
  const list = await Booking.find({ customer: req.params.id }).populate('provider');
  res.json(list);
});

module.exports = router;
