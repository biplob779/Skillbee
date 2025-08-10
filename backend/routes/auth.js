const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req,res)=>{
  try{
    const { name,email,password,role } = req.body;
    const hashed = await bcrypt.hash(password,10);
    const user = new User({ name,email,password:hashed,role });
    await user.save();
    res.json({ ok: true });
  }catch(err){
    console.error(err);
    res.status(400).json({ error: 'Registration failed' });
  }
});

// login
router.post('/login', async (req,res)=>{
  try{
    const { email,password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ error: 'Invalid' });
    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).json({ error: 'Invalid' });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
