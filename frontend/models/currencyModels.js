import mongoose from 'mongoose';

const currencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  rate: { type: Number, required: true },
});

const Currency = mongoose.model('Currency', currencySchema);

export default Currency;
