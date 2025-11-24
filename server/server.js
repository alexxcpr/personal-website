require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer transporter
// Replace these with actual SMTP settings in .env
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // You receive the email
    subject: `New Message from Portfolio: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    // For demo purposes, if no creds are set, just log it
    if (!process.env.EMAIL_USER) {
        console.log('--- Mock Email Sending ---');
        console.log(mailOptions);
        console.log('--------------------------');
        return res.status(200).json({ message: 'Email logged (Mock mode)' });
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

