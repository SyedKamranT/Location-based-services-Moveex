# config.py
from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    # Mongo
    MONGO_URI = os.getenv("MONGO_URI")

    # JWT
    JWT_SECRET = os.getenv("JWT_SECRET")
    JWT_ALGORITHM = "HS256"
    JWT_EXP_DELTA_SECONDS = 3600  # 1 hour
    
    RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID")
    RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET")



