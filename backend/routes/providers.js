const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');

// list providers
router.get('/', async (req,res)=>{
  const q = req.query.q || '';
  const providers = await Provider.find({ title: new RegExp(q,'i') }).limit(50);
  res.json(providers);
});

// create provider (simple, expect provider user exists)
router.post('/', async (req,res)=>{
  const p = new Provider(req.body);
  await p.save();
  res.json(p);
});

module.exports = router;
