const path = require('node:path');
const { Pool } = require('pg');

require('dotenv').config({
  path: path.join(__dirname, 'penny.env'),
});

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'penny_db',
  password: '123',
  port: 1234,
});

module.exports = pool;

pool.connect()
    .then(client => {
        console.log("PostgreSQL connected successfully");
        client.release();
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });