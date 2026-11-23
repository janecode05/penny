const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const pool = require('../dbcred/db');

require('dotenv').config();

const app = express();
app.use(helmet());

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Penny backend Server is running!');
});
app.listen(3000, () => {
    console.log(`Penny Server is running on port 3000`);
});
//login
app.post('/login', async (req, res) => {
  const { username, password } = req.body ?? {};

  if (
    typeof username !== 'string' ||
    username.trim() === '' ||
    typeof password !== 'string' ||
    password === ''
  ) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const result = await pool.query(
      'SELECT id, name, password FROM users WHERE name = $1',
      [username]
    );

    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    return res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Login failed' });
  }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if username already exists
        const existingUser = await pool.query(
            'SELECT * FROM users WHERE name = $1',
            [username]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: 'Username already exists'
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in PostgreSQL
        const result = await pool.query(
           `INSERT INTO users (name, password)
             VALUES ($1, $2)
             RETURNING id, name`,
            [username, hashedPassword]
        );

        res.status(201).json({
            message: 'User registered successfully',
            user: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: 'Registration failed'
        });

    }
});


