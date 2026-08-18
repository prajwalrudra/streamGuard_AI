# 🛡️ StreamGuard AI — Backend

AI co-pilot for live stream super chat management. Automatically filters, prioritizes, and suggests responses for every super chat so streamers never miss a fan.

## 🏗️ Architecture

- **FastAPI** backend with WebSocket real-time communication
- **Multi-Agent AI Pipeline** (Moderation → Sentiment → Revenue → Response)
- **Google Gemini 2.0 Flash** for AI analysis
- **Supabase (PostgreSQL)** for persistence
- **Intelligent Priority Queue** for smart chat ordering
- **Voice Matching Engine** for auto-advancing read chats

## 🚀 Quick Start

```bash
# 1. Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Configure environment
copy .env.example .env
# Edit .env with your Supabase + Gemini keys

# 4. Run Supabase schema
# Copy supabase_schema.sql contents into Supabase SQL Editor

# 5. Start server
python run.py
```

## 📡 API Docs

Once running, visit: `http://localhost:8000/docs`

### Key Endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/stream/start` | Start a stream session |
| POST | `/api/stream/stop` | End the session |
| GET | `/api/stream/status` | Get session status |
| POST | `/api/superchat/send` | Send a super chat |
| GET | `/api/superchat/queue` | View the queue |
| GET | `/api/superchat/next` | Advance to next chat |
| WS | `/ws` | WebSocket connection |

## 🤖 AI Agent Pipeline

```
SuperChat → [Moderation] → [Sentiment + Revenue] → [Response] → Queue
```

All 4 agents are powered by a **single optimized Gemini call** for speed and cost efficiency.
