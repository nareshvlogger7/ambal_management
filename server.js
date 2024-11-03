const express = require('express');
const path = require('path');

// Import routes
const jewelryRoutes = require('./routes/jewelry');
const expensesRoutes = require('./routes/expenses');

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/api/jewelry', jewelryRoutes);
app.use('/api/expenses', expensesRoutes);

// Page routes (additional pages for user navigation)
app.get('/upload', (req, res) => {
  res.send('Upload Data Page - To be implemented');
});

app.get('/display', (req, res) => {
  res.send('Display Data Page - To be implemented');
});

app.get('/expenses', (req, res) => {
  res.send('Expenses Entry Page - To be implemented');
});

app.get('/expenses/display', (req, res) => {
  res.send('Expenses Display Page - To be implemented');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
