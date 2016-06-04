'use strict';

import mongoose from 'mongoose';

var MenuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  serving: { type: Number, default: 1 },
  delDate: Date,
  age: { type: Number, default: 0 },
  shelfLife: Number
});

export default mongoose.model('Menu', MenuSchema);
