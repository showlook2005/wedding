const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wedding-rsvp';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema Definition
const rsvpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  attending: { type: String, required: true },
  guest_count: { type: String, default: "0" },
  attending_events: { type: String, default: "None" },
  guess_emotional_first: { type: String, default: "None" },
  wedding_mood: { type: String, default: "None" },
  message: { type: String, default: "" },
  advice_for_forever: { type: String, default: "" },
  clientId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const RSVP = mongoose.model('RSVP', rsvpSchema);

// API Routes

// 1. Submit RSVP
app.post('/api/rsvp', async (req, res) => {
  try {
    const {
      name,
      phone,
      attending,
      guest_count,
      attending_events,
      guess_emotional_first,
      wedding_mood,
      message,
      advice_for_forever,
      clientId
    } = req.body;

    if (!name || !phone || !attending || !clientId) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const newRSVP = new RSVP({
      name,
      phone,
      attending,
      guest_count,
      attending_events,
      guess_emotional_first,
      wedding_mood,
      message,
      advice_for_forever,
      clientId
    });

    await newRSVP.save();
    console.log(`RSVP successfully saved for: ${name}`);
    res.status(201).json({ success: true, message: 'RSVP saved successfully' });
  } catch (error) {
    console.error('Error saving RSVP:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// 2. Fetch all RSVPs (Admin Only, passcode protected)
app.get('/api/rsvps', async (req, res) => {
  try {
    const adminPasscode = process.env.ADMIN_PASSCODE || 'AbhishekNeha2026';
    const client_id = process.env.CLIENT_ID || 'AbhishekwedsNeha-wedding-2026';
    const providedPasscode = req.headers['x-admin-passcode'] || req.query.passcode;

    if (providedPasscode !== adminPasscode) {
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid passcode' });
    }

    // Filter by clientId to only return RSVPs for this wedding
    const rsvps = await RSVP.find({ clientId: client_id }).sort({ createdAt: -1 });
    res.json({ success: true, rsvps });
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Root Route
app.get('/', (req, res) => {
  res.send('Abhishek & Neha Wedding RSVP API is running.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
