// dbConfig.js
const mysql = require('mysql2');

// Database connection configuration
const db = mysql.createConnection({
  host: 'bsaqopz2ys7d2fhwfkfq-mysql.services.clever-cloud.com',
  user: 'ulaqghovmyjxjgvo',
  password: 'dl9D5NfAwXMnyP4LOLbc',
  database: 'bsaqopz2ys7d2fhwfkfq'
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;
