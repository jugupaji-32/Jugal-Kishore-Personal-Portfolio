const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

const { EMAIL_USER, EMAIL_PASS } = process.env;
const emailConfigured = Boolean(EMAIL_USER && EMAIL_PASS);

if (!emailConfigured) {
  console.warn('Missing EMAIL_USER or EMAIL_PASS in .env; contact form email sending is disabled until they are configured.');
}

const transporter = emailConfigured
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })
  : null;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

app.post('/send', async (req, res) => {
  const { email, phone, message } = req.body;
  const budgetRange = req.body['budget-range'] || 'Not specified';

  if (!email || !message) {
    return res.status(400).send('Error');
  }

  if (!transporter) {
    return res.status(503).send('Error');
  }

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `New contact form submission from ${email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budgetRange)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    res.send('Success');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Error');
  }
});

app.use((req, res, next) => {
  if (req.path.startsWith('/node_modules') || req.path.startsWith('/.')) {
    return res.status(403).send('Forbidden');
  }
  next();
});

app.use(express.static(__dirname, { dotfiles: 'deny' }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
