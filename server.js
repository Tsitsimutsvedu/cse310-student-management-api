const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Student Management API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});