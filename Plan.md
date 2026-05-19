````markdown
# 🎓 Alumni Networking Hub — Complete Project Overview

## 📌 Project Summary

A full-stack alumni networking platform that connects graduates, enables professional collaboration, job referrals, mentorship, event management, and community building — built with **Next.js**, **FastAPI**, **NeonDB**, and **Clerk Authentication**.

---

# 🧩 Core Feature Modules

## 1. 🔐 Authentication & Onboarding (Clerk)

### Features
- Clerk-powered Sign Up / Login
  - Email Authentication
  - Google OAuth
  - LinkedIn OAuth
- Role-based Access
  - Alumni
  - Student
  - Admin

### Multi-Step Onboarding Wizard
Collect:
- Graduation Year
- Degree
- Branch/Department
- Current Company
- Job Title
- Location
- Skills
- Interests
- Mentorship Availability

### Additional Features
- Profile completion score
- Smart onboarding nudges

---

## 2. 👥 Alumni Directory

### Features
- Searchable alumni database
- Filterable directory

### Filters
- Batch Year
- Department
- Location
- Industry
- Company
- Skills

### Additional Features
- Alumni cards with quick-connect CTA
- Public/Private profile visibility
- “People You May Know” suggestions

---

## 3. 🧑‍💼 User Profiles

### Features
- Rich profile pages
- Bio & avatar
- Work history
- Education timeline
- Skills & expertise tags

### Social Links
- LinkedIn
- GitHub
- Twitter/X
- Personal Website

### Additional Sections
- Achievements & awards
- Mutual connections
- Activity feed
- Connection count

---

## 4. 🤝 Connections & Networking

### Features
- Send connection requests
- Accept/Decline requests
- Connection request messages
- Follow without connecting
- Mutual connections display
- 1st & 2nd degree connection graph

---

## 5. 💬 Messaging System

### Features
- Real-time 1:1 messaging
- FastAPI WebSockets integration
- Conversation list with unread counts
- Read/Delivered/Sent status

### Attachments
- Images
- Files

### Additional Features
- Conversation search

---

## 6. 💼 Job Board & Referrals

### Features
- Alumni can post job openings
- Job discovery system
- Referral requests

### Job Listing Fields
- Title
- Company
- Location
- Job Type
  - Remote
  - Hybrid
  - On-site
- Salary Range

### Additional Features
- Job bookmarking
- Application tracking
- Admin moderation

---

## 7. 🎯 Mentorship Program

### Features
- Alumni mentor registration
- Student mentorship requests
- Mentor availability slots

### Mentorship Categories
- Career Guidance
- Interview Preparation
- Startup Advice
- Research Mentorship

### Additional Features
- Google Calendar integration
- Feedback & ratings
- Mentorship tracking

---

## 8. 📅 Events & Reunions

### Features
- Virtual & physical events
- RSVP system
- Capacity limits
- Notifications & reminders

### Event Types
- Reunions
- Webinars
- Workshops
- Networking Mixers

### Additional Features
- Photo galleries
- Event archives
- Admin approval workflow

---

## 9. 🌐 Community Forums / Groups

### Features
- Batch groups
- Department groups
- Interest-based communities

### Discussion Features
- Threaded discussions
- Upvotes
- Pinned announcements
- Rich text editor
- Code blocks support

---

## 10. 📰 News Feed / Activity Stream

### Features
- Personalized activity feed
- Connection-based feed ranking
- Group-based content

### Supported Post Types
- Text
- Images
- Article links
- Job shares
- Event shares

### Engagement Features
- Likes
- Comments
- Shares
- Trending posts

---

## 11. 🔔 Notifications System

### Features
- In-app notification center
- Email notifications
- Real-time updates

### Notification Types
- Connection requests
- Messages
- Event reminders
- Job alerts
- Forum replies

### Additional Features
- Notification preferences panel

---

## 12. 🛠️ Admin Dashboard

### Features
- User management
- Role management
- Ban/unban users
- Platform analytics

### Analytics
- Active users
- Connections made
- Jobs posted
- Events hosted

### Moderation Features
- Review flagged content
- Moderate jobs/posts
- Bulk email campaigns
- CSV export
- System health monitoring

---

## 13. 🔍 Search & Discovery

### Features
- Global search system
- Full-text PostgreSQL search
- Search suggestions
- Autocomplete
- Recent searches

### Search Targets
- Users
- Jobs
- Events
- Groups
- Posts

---

## 14. 💖 Donation / Give-Back Module (Optional)

### Features
- Scholarship donations
- College fundraising campaigns
- Donation receipts
- Donation history
- Campaign progress bars

---

# 🗂️ Database Schema (NeonDB / PostgreSQL)

```sql
users
profiles
connections
messages
conversations
jobs
job_applications
referral_requests
mentors
mentorship_sessions
mentorship_feedback
events
event_rsvps
groups
group_members
posts
post_reactions
comments
notifications
announcements
reports
````

---

# 🛠️ Tech Stack

| Layer          | Technology                                       |
| -------------- | ------------------------------------------------ |
| Frontend       | Next.js 14 (App Router), Tailwind CSS, shadcn/ui |
| Backend        | FastAPI (Python), WebSockets                     |
| Database       | NeonDB (PostgreSQL), Prisma ORM / asyncpg        |
| Authentication | Clerk                                            |
| Storage        | Cloudinary / AWS S3                              |
| Email          | Resend / SendGrid                                |
| Caching        | Redis (Upstash)                                  |
| Deployment     | Vercel + Railway/Render                          |
| Real-Time      | FastAPI WebSockets                               |

---

# 📁 Project Structure

```bash
alumni-hub/
├── frontend/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   │   ├── feed/
│   │   │   ├── directory/
│   │   │   ├── profile/[id]/
│   │   │   ├── messages/
│   │   │   ├── jobs/
│   │   │   ├── mentorship/
│   │   │   ├── events/
│   │   │   ├── groups/
│   │   │   └── admin/
│   │   └── onboarding/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── feed/
│   │   ├── profile/
│   │   ├── messaging/
│   │   └── shared/
│   │
│   └── lib/
│       ├── api.ts
│       └── hooks/
│
└── backend/
    ├── main.py
    ├── routers/
    │   ├── users.py
    │   ├── connections.py
    │   ├── messages.py
    │   ├── jobs.py
    │   ├── mentorship.py
    │   ├── events.py
    │   ├── groups.py
    │   ├── feed.py
    │   ├── notifications.py
    │   └── admin.py
    │
    ├── models/
    ├── schemas/
    ├── services/
    ├── middleware/
    │   └── clerk_auth.py
    └── database.py
```

---

# 🤖 AI Agent Prompt

Copy and paste the following prompt into your AI coding assistant (Cursor, Copilot Workspace, etc.)

---

## 🚀 PROJECT: Alumni Networking Hub

### 🧰 Tech Stack

* Frontend: Next.js 14 (App Router, TypeScript)
* Styling: Tailwind CSS + shadcn/ui
* Backend: FastAPI (Python 3.11+)
* Database: NeonDB (PostgreSQL)
* Authentication: Clerk
* Real-time: FastAPI WebSockets
* Storage: Cloudinary
* Email: Resend
* Cache & Rate Limiting: Upstash Redis

---

# 🔐 Authentication & Roles

### Implement:

* Clerk Authentication
* Google Login
* Email Login
* JWT verification middleware
* Role-based access

### Roles

* ALUMNI
* STUDENT
* ADMIN

### Onboarding Flow

Collect:

* Name
* Avatar
* Graduation year
* Department
* Company
* Job title
* Bio
* Skills
* Social links
* Mentorship availability

---

# 🗄️ Database Schema

## Tables

* users
* connections
* conversations
* messages
* jobs
* job_applications
* referral_requests
* mentors
* mentorship_sessions
* events
* event_rsvps
* groups
* group_members
* posts
* comments
* notifications

Use:

* Proper indexes
* Foreign keys
* UUID primary keys

---

# ⚡ Backend Requirements (FastAPI)

## Routers

* users.py
* connections.py
* messages.py
* jobs.py
* mentorship.py
* events.py
* groups.py
* feed.py
* notifications.py
* admin.py

### Required Features

* Async SQLAlchemy
* Pagination
* WebSocket support
* Clerk JWT validation
* Error handling
* Role authorization

---

# 🎨 Frontend Requirements (Next.js)

## Main Pages

* Landing Page
* Feed
* Directory
* Profile
* Messaging
* Jobs
* Mentorship
* Events
* Groups
* Notifications
* Admin Dashboard

## UI Components

* Navbar
* AlumniCard
* PostCard
* JobCard
* MentorCard
* EventCard
* MessageThread
* NotificationDropdown
* OnboardingWizard

### Additional Features

* React Query
* Zustand
* Infinite Scroll
* Mobile responsiveness
* Optimistic UI updates

---

# 🔄 Real-Time Features

## WebSockets

* Live messaging
* Real-time notifications
* Reconnect logic
* React Query cache syncing

---

# 🔔 Notifications

Trigger notifications for:

* Connection requests
* Messages
* Mentorship updates
* Event reminders
* Referral requests
* Group activity
* Admin announcements

---

# 🛡️ Admin Dashboard

## Features

* Analytics dashboard
* User management
* Content moderation
* Event approvals
* Broadcast emails

---

# 🌍 Environment Variables

## Next.js (.env.local)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_WS_URL=
```

## FastAPI (.env)

```env
DATABASE_URL=
CLERK_SECRET_KEY=
CLERK_JWKS_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
```

---

# ✅ Final Requirements

* Production-ready architecture
* Fully responsive UI
* SEO-friendly public profiles
* Proper loading states
* No placeholder code
* Complete README setup guide
* Fully connected frontend + backend
* End-to-end implementation

```
```
