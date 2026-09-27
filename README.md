# D & E Studios — Job Finder

Ghana-focused job board connecting job seekers with employers.

## Run locally

```bash
cp .env.example .env
npm install
npm run dev
```

In another terminal:

```bash
cd frontend
npm install
npm start
```

API: `http://localhost:5000`; frontend: `http://localhost:3000`.
Set `DATABASE_URL` in `.env` for MongoDB persistence. Never commit real credentials.

## Features

- Job search and opportunity details
- Employer job posting form
- WhatsApp contact links
- Responsive Ghana-focused frontend
- Express API with MongoDB persistence
