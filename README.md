# StreamGuard AI

StreamGuard AI is a live-stream assistant with a Next.js frontend and a FastAPI backend. It helps manage super chats with moderation, sentiment analysis, prioritization, AI response suggestions, and real-time updates.

## Project Structure

- `frontend/` - Next.js app for dashboard and overlay UI.
- `backend/` - FastAPI service, WebSocket endpoints, AI agent pipeline, and Supabase schema.

## Frontend

```powershell
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:3000` by default.

## Backend

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python run.py
```

The backend API docs are available at `http://localhost:8000/docs` after startup.

## Environment

Real environment files are intentionally not committed. Use `backend/.env.example` as the backend template, and create local frontend environment files as needed.
