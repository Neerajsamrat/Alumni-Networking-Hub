<div align="center">

<img src="https://img.shields.io/badge/Alumni-Networking%20Hub-blue?style=for-the-badge&logo=graduation-cap&logoColor=white" alt="Alumni Networking Hub"/>

# 🎓 Alumni Networking Hub

### *Your Network is Your Net Worth*

A full-stack alumni networking platform to connect graduates, enable professional collaboration, job referrals, mentorship, event management, and community building.

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.136-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/NeonDB-PostgreSQL-336791?style=flat-square&logo=postgresql)](https://neon.tech/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk)](https://clerk.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python)](https://www.python.org/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Contributing](#-contributing)

---

## 🌟 Overview

**Alumni Networking Hub** is a comprehensive full-stack web platform designed to bridge the gap between alumni and current students. It enables meaningful professional connections, career opportunities, mentorship, and community engagement — all in one place.

> 🔗 **Live Demo:** [Coming Soon]
> 📬 **Contact:** [nk70508058@gmail.com](mailto:nk70508058@gmail.com)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication & Onboarding
- Clerk-powered Sign Up / Login
- Email, Google & LinkedIn OAuth
- Role-based access (Alumni / Student / Admin)
- Multi-step onboarding wizard
- Profile completion scoring

### 👥 Alumni Directory
- Searchable & filterable alumni database
- Filter by Batch, Department, Location, Industry
- "People You May Know" suggestions
- Public/Private profile visibility

### 💬 Real-Time Messaging
- 1:1 real-time chat (WebSockets)
- Read / Delivered / Sent status
- Image & file attachments
- Conversation search

### 💼 Job Board & Referrals
- Alumni can post job openings
- Referral request system
- Job bookmarking & application tracking
- Admin moderation

</td>
<td width="50%">

### 🎯 Mentorship Program
- Alumni mentor registration
- Mentorship request & scheduling
- Categories: Career, Interviews, Startups, Research
- Google Calendar integration
- Feedback & ratings

### 📅 Events & Reunions
- Virtual & physical events
- RSVP system with capacity limits
- Event types: Reunions, Webinars, Workshops
- Photo galleries & event archives

### 🌐 Community Groups
- Batch & Department groups
- Interest-based communities
- Threaded discussions with upvotes
- Rich text editor with code blocks

### 📰 News Feed
- Personalized activity stream
- Post types: Text, Images, Links, Jobs, Events
- Likes, Comments, Shares
- Trending posts algorithm

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| **Backend** | FastAPI (Python 3.11+), WebSockets, Uvicorn |
| **Database** | NeonDB (PostgreSQL), SQLAlchemy (Async), asyncpg |
| **Authentication** | Clerk (Email + Google + LinkedIn OAuth) |
| **Storage** | Cloudinary / AWS S3 |
| **Email** | Resend / SendGrid |
| **Caching** | Redis (Upstash) |
| **Deployment** | Vercel (Frontend) + Railway/Render (Backend) |
| **Real-Time** | FastAPI WebSockets |

---

## 📁 Project Structure

```
Alumni-Networking-Hub/
│
├── 📂 frontend/                    # Next.js Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/             # Sign-in & Sign-up pages
│   │   │   │   ├── sign-in/
│   │   │   │   └── sign-up/
│   │   │   ├── (dashboard)/        # Protected dashboard routes
│   │   │   │   ├── feed/
│   │   │   │   ├── directory/
│   │   │   │   ├── profile/[id]/
│   │   │   │   ├── messages/
│   │   │   │   ├── jobs/
│   │   │   │   ├── mentorship/
│   │   │   │   ├── events/
│   │   │   │   ├── groups/
│   │   │   │   └── notifications/
│   │   │   ├── layout.tsx          # Root layout with Clerk & ThemeProvider
│   │   │   ├── page.tsx            # Landing page
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── shared/             # Navbar, Footer, etc.
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   └── theme-provider.tsx
│   │   └── lib/
│   │       └── utils.ts
│   ├── package.json
│   └── next.config.ts
│
└── 📂 backend/                     # FastAPI Application
    ├── main.py                     # App entry point & CORS setup
    ├── database.py                 # Async SQLAlchemy engine & session
    ├── models/
    │   ├── __init__.py
    │   └── user.py                 # Database models
    ├── routers/
    │   ├── __init__.py
    │   └── users.py                # API route handlers
    └── requirements.txt
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18+
- [Python](https://www.python.org/) 3.11+
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Neerajsamrat/Alumni-Networking-Hub.git
cd Alumni-Networking-Hub
```

---

### 2️⃣ Backend Setup (FastAPI)

```bash
# Navigate to backend
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Create .env file and add your DATABASE_URL
# (see Environment Variables section below)

# Start the backend server
python -m uvicorn main:app --reload --port 8000
```

✅ Backend runs at: **http://127.0.0.1:8000**
📄 API Docs available at: **http://127.0.0.1:8000/docs**

---

### 3️⃣ Frontend Setup (Next.js)

```bash
# Navigate to frontend (open a new terminal)
cd frontend

# Install Node dependencies
npm install --legacy-peer-deps

# Create .env.local file and add your Clerk keys
# (see Environment Variables section below)

# Start the development server
npm run dev
```

✅ Frontend runs at: **http://localhost:3000**

---

### 4️⃣ Open in Browser

| Service | URL |
|---|---|
| 🌐 Frontend | http://localhost:3000 |
| ⚡ Backend API | http://127.0.0.1:8000 |
| 📚 Swagger Docs | http://127.0.0.1:8000/docs |

---

## 🔐 Environment Variables

### Frontend — `frontend/.env.local`

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

### Backend — `backend/.env`

```env
DATABASE_URL=postgresql://username:password@host/dbname?sslmode=require
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_JWKS_URL=https://your-domain.clerk.accounts.dev/.well-known/jwks.json
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_URL=your_redis_url
UPSTASH_REDIS_TOKEN=your_redis_token
```

> ⚠️ **Never commit `.env` files to GitHub. They are already in `.gitignore`.**

---

## 📚 API Documentation

Once the backend is running, visit the interactive API docs:

- **Swagger UI:** http://127.0.0.1:8000/docs
- **ReDoc:** http://127.0.0.1:8000/redoc

### Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `POST` | `/users/` | Create a new user |
| `GET` | `/users/` | List all users |
| `GET` | `/users/{id}` | Get user by ID |
| `PUT` | `/users/{id}` | Update user profile |
| `DELETE` | `/users/{id}` | Delete a user |

---

## 🗄️ Database Schema

Key tables in the PostgreSQL database:

```
users               → Core user accounts
profiles            → Extended profile data
connections         → Alumni connections graph
messages            → 1:1 messages
conversations       → Message threads
jobs                → Job postings
job_applications    → Application tracking
referral_requests   → Referral system
mentors             → Mentor registrations
mentorship_sessions → Scheduled sessions
events              → Events & reunions
event_rsvps         → Event attendance
groups              → Community groups
group_members       → Group membership
posts               → Feed posts
post_reactions      → Likes & reactions
comments            → Post comments
notifications       → Notification center
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m 'Add some feature'`
4. **Push** to the branch: `git push origin feature/your-feature`
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ by **Neeraj Kumar**

⭐ **Star this repo if you found it helpful!** ⭐

</div>
