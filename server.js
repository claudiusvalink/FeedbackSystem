// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

// Data Storage Array in Memory (Data akan hilang saat server di-restart)
let feedbacks = [];

// Data Dummy buat check
feedbacks.push({
    id: '1',
    name: 'Bina Nusantara',
    email: 'binus@example.com',
    eventName: 'Workshop Express.js',
    division: 'RnD',
    rating: 5,
    comment: 'Sangat informatif!',
    suggestion: 'Perlu lebih banyak contoh praktis.',
    createdAt: new Date().toISOString(),
    status: 'open',
});
feedbacks.push({
    id: '2',
    name: 'Aktivis BNCC',
    email: 'aktivis@example.com',
    eventName: 'Tech Talk Series',
    division: 'LnT',
    rating: 4,
    comment: 'Cukup bagus.',
    suggestion: '',
    createdAt: new Date().toISOString(),
    status: 'in-review',
});

// Buat endpoint APInya taroh bawah sini
// SUMBIT FEEDBACK
app.post('/api/feedback', (req, res) => {
    const { name, email, eventName, division, rating, comment, suggestion } = req.body;
    if (!name || !email || !eventName || !division || !rating) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newFeedback = {
        id: Date.now().toString(), 
        name,
        email,
        eventName,
        division,
        rating: parseInt(rating), 
        comment: comment || '',
        suggestion: suggestion || '',
        createdAt: new Date().toISOString(),
        status: 'open', 
    };
    feedbacks.unshift(newFeedback); 
    res.status(201).json(newFeedback);
});
app.get('/api/feedback', (req, res) => {
    res.json(feedbacks);
});
// UPDATE FEEDBACK
app.put('/api/feedback/:id', (req, res) => {
    const id = req.params.id;
    const updateFields = req.body;
    const index = feedbacks.findIndex(f => f.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Feedback not found' });
    }
    feedbacks[index] = { ...feedbacks[index], ...updateFields };
    res.json(feedbacks[index]);
});
// DELETE FEEDBACK
app.delete('/api/feedback/:id', (req, res) => {
    const id = req.params.id;
    const initialLength = feedbacks.length;
    feedbacks = feedbacks.filter(f => f.id !== id); 

    if (feedbacks.length === initialLength) {
        return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(204).send(); 
});

// Buat Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});