from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users
from database import engine, Base
from contextlib import asynccontextmanager
import logging

logger = logging.getLogger("uvicorn")

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create database tables if they don't exist
    try:
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        logger.info("Successfully connected to the database and created tables.")
    except Exception as e:
        logger.error(f"Failed to connect to the database on startup. Error: {e}")
        logger.warning("Please configure your DATABASE_URL in the .env file. The application will continue running, but DB-dependent endpoints will fail.")
        
    yield
    # Cleanup on shutdown
    try:
        await engine.dispose()
    except Exception:
        pass

app = FastAPI(title="Alumni Networking Hub API", lifespan=lifespan)

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Alumni Networking Hub API"}
