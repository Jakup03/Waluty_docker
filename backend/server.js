import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Currency from './currencyModels.js';

const app = express();

app.use(cors());

// Połączenie z MongoDB
mongoose.connect('mongodb://admin:password@mongodb:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());

// Endpoint do pobierania walut
app.get('/api/currencies', async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.json(currencies);
  } catch (err) {
    console.error('Error fetching currencies:', err);
    res.status(500).send('Server Error');
  }
});

// Endpoint do dodawania waluty
app.post('/api/currencies', async (req, res) => {
  try {
    const newCurrency = new Currency(req.body);
    await newCurrency.save();
    res.status(201).json(newCurrency);
  } catch (err) {
    console.error('Error adding currency:', err);
    res.status(500).send('Server Error');
  }
});

app.delete('/api/currencies/:id', async (req, res) => {
  try {
    const currency = await Currency.findByIdAndDelete(req.params.id);
    if (!currency) {
      return res.status(404).send('Currency not found');
    }
    res.json({ message: 'Currency deleted' });
  } catch (err) {
    console.error('Error deleting currency:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(3001, "0.0.0.0", () => {
  console.log('Server is running on port 3001');
});
