# Smart Wildlife Conservation and Anti-Poaching Monitoring System

A university group software engineering project. The system helps wildlife rangers, park
managers, and researchers monitor wildlife, manage ranger patrols, report wildlife/poaching
incidents, track GPS-enabled animals, generate alerts, and analyze conservation data.

## Architecture

```
            React Web Frontend (frontend/)
             Manager / Researcher
                     │
                     │ REST API
                     ▼
            Express Backend (backend/)
                     │
                     ▼
                 MongoDB
                     ▲
                     │ REST API
                     │
          React Native Mobile App (mobile/)
                 Ranger App (offline-first)
```

## Repository Structure

```
smart-wildlife-conservation-system/
  backend/    Node.js + Express + MongoDB REST API
  frontend/   React + Vite web app (Park Manager / Researcher / Admin)
  mobile/     React Native (Expo) app (Ranger)
  README.md
  .gitignore
```

## Main Use Cases

1. Manage Ranger Patrols
2. Report Wildlife Incident
3. Monitor Animal Tracking & Alerts
4. Generate Conservation Reports & Analysis

## Getting Started

Each part of the system runs independently. You need Node.js (v18+) and, for the backend,
a MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas)).

### Backend

```bash
cd backend
npm install
cp .env.example .env   # edit MONGODB_URI, JWT_SECRET, etc.
npm run dev            # http://localhost:5000
```

### Frontend (web)

```bash
cd frontend
npm install
cp .env.example .env
npm run dev             # http://localhost:5173
```

### Mobile (Ranger app)

```bash
cd mobile
npm install
cp .env.example .env    # set EXPO_PUBLIC_API_BASE_URL to your machine's LAN IP
npm start                # scan the QR code with Expo Go
```

See each folder's own README for more details.

## Tech Stack

- **Web**: React, Vite, React Router, Axios, Tailwind CSS, Recharts, Leaflet
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Mobile**: React Native (Expo), React Navigation, Axios, AsyncStorage, expo-location,
  expo-camera, react-native-maps

## Development Status

This repository is being built incrementally, module by module (see the project's phased
development plan). The current state provides the base project setup for all three apps:
folder structure, tooling, environment configuration, and placeholder pages/screens.
Business logic (authentication, patrols, incidents, animal tracking, alerts, reports) is
implemented in later phases.

## Environment Variables

Each app has a `.env.example` file documenting the environment variables it needs. Copy it
to `.env` in the same folder and fill in real values. Never commit `.env` files or secrets.
