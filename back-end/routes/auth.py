# routes/auth.py
from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from app import mongo
import jwt
import datetime

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    required = ["name", "email", "phone", "address", "password"]

    # 1) Validate payload
    if not data or any(field not in data or not data[field] for field in required):
        return jsonify({"error": "Missing required fields"}), 400

    name = data["name"].strip()
    email = data["email"].strip().lower()
    phone = data["phone"].strip()
    address = data["address"].strip()
    password = data["password"]

    # 2) Enforce password length
    if len(password) < 8:
        return jsonify({"error": "Password must be at least 8 characters"}), 400

    # 3) Check for existing user
    if mongo.db.users.find_one({"email": email}):
        return jsonify({"error": "Email already registered"}), 400

    # 4) Hash & insert
    pw_hash = generate_password_hash(password)
    user_doc = {
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
        "password": pw_hash
    }
    mongo.db.users.insert_one(user_doc)

    return jsonify({"message": "User created successfully"}), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data or "email" not in data or "password" not in data:
        return jsonify({"error": "Email and password required"}), 400

    email = data["email"].strip().lower()
    password = data["password"]

    # 1) Find user
    user = mongo.db.users.find_one({"email": email})
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    # 2) Create JWT
    payload = {
        "user_id": str(user["_id"]),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(
            seconds=current_app.config["JWT_EXP_DELTA_SECONDS"]
        )
    }
    token = jwt.encode(
        payload,
        current_app.config["JWT_SECRET"],
        algorithm=current_app.config["JWT_ALGORITHM"]
    )

    return jsonify({
        "access_token": token,
        "expires_in": current_app.config["JWT_EXP_DELTA_SECONDS"]
    }), 200