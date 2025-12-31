const mysql = require('mysql2');
require('dotenv').config();

let connection;

if (process.env.DATABASE_URL) {
  // For Railway deployment
  connection = mysql.createConnection(process.env.DATABASE_URL);
} else {
  // For local development
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;