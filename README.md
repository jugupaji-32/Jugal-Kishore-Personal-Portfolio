# Personal Portfolio Backend

A modern personal portfolio website with a dynamic contact form backend built using Node.js, Express, and Nodemailer. The project serves a static portfolio landing page while handling form submissions securely and forwarding them to the configured email account.

This repository combines a polished front-end portfolio experience with a lightweight backend so that visitors can send inquiries without relying on a separate third-party email service.

## Overview

This portfolio is designed to present professional identity, skills, projects, and contact information in a visually engaging way. It includes a responsive layout, modern styling, and an operational contact backend that accepts form submissions and sends them through Gmail SMTP.

The app is simple to run locally, easy to deploy to hosting services, and ideal for personal branding or a freelance portfolio.

## Features

- Responsive portfolio layout optimized for desktop, tablet, and mobile devices
- Static front-end served directly by Express
- Contact form endpoint for handling visitor inquiries
- Email delivery through Nodemailer using Gmail SMTP
- Environment-based configuration for sensitive credentials
- Lightweight Node.js server with no heavy framework required
- Support for local development and production hosting
- Easy integration with a Netlify/Vercel/Node hosting environment

## Tech Stack

- Node.js
- Express.js
- Nodemailer
- dotenv
- HTML, CSS, and JavaScript
- Static asset hosting through Express

## Project Structure

```text
Personal Portfolio backend/
├── index.html                # Main portfolio landing page
├── server.js                 # Express server and email handling
├── package.json              # Project scripts and dependencies
├── .env.example              # Example environment config (if used)
├── LICENSE                   # Project license
├── README.md                 # Project documentation
├── css/                      # Global styles
├── js/                       # Front-end JavaScript files
├── images/                   # Portfolio assets and media
├── fonts/                    # Fonts used by the site
├── media/                    # Additional static media files
├── ...
└── 3D Abstract Ball/         # Additional portfolio design variants
```

## Prerequisites

Before running the project locally, make sure you have:

- Node.js installed on your machine
- npm or yarn available
- A Gmail account with app password support enabled
- A valid `.env` configuration file for email credentials

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd "Personal Portfolio backend"
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=5500
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

> Important: Use a Gmail App Password rather than your normal account password. If you use Gmail with two-factor authentication, app passwords are the recommended way to authenticate with Nodemailer.

## Running the Application

Start the server in development mode:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

The server will run on the default port `5500` unless you define a different `PORT` in your `.env` file.

Open your browser and visit:

```text
http://localhost:5500
```

## Contact Form Behavior

The backend exposes a `POST /send` route that accepts form data from the portfolio contact section.

### Request format

```json
{
  "email": "example@email.com",
  "phone": "+1234567890",
  "budget-range": "5000-10000",
  "message": "Hello, I would like to discuss a project."
}
```

### Response behavior

- If required data is missing, the server returns a `400` error.
- If email is not configured, the server returns a `503` error.
- If the email is sent successfully, the server responds with `Success`.
- If sending fails, the server responds with a `500` error.

The form content is sanitized before being inserted into the email HTML to reduce the risk of HTML injection.

## Security Notes

- The project loads sensitive credentials from a `.env` file.
- The app denies access to dotfiles and `node_modules`.
- Static assets are served from the project root.
- Sensitive settings should never be committed to version control.

A `.env` file should be added to `.gitignore` to avoid exposing email credentials publicly.

## Deployment

This project is ready to be deployed to any environment that supports Node.js hosting.

Common deployment targets include:

- Render
- Railway
- Heroku
- DigitalOcean
- VPS/server environments
- Netlify with serverless wrapper if adapted

When deploying, make sure you configure the same environment variables in your hosting platform:

- `PORT`
- `EMAIL_USER`
- `EMAIL_PASS`

## Live Portfolio

Portfolio website:

- https://techiemen.netlify.app/

## Contact

- Email: info.techiemen.go@gmail.com
- Telegram: https://t.me/techiemengo
- GitHub: https://github.com/jugupaji-32
- Instagram: https://www.instagram.com/techiemen_go/

## Resume

- CV / Resume: https://drive.google.com/file/d/1J4z9T0M2gWsYv7px5BB1RUF1QeF9rrA1/view?usp=drive_link

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

© 2026 TechiemenGO. All rights reserved.
