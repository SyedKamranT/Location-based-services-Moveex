# routes/courier.py
from flask import Blueprint, request, jsonify
from extensions import mongo
import datetime

courier_bp = Blueprint("courier", __name__)

@courier_bp.route("/apply", methods=["POST"])
def apply():
    data = request.get_json() or {}
    required = ["name", "email", "phone", "city", "message"]
    if any(not data.get(k) for k in required):
        return jsonify({"error": "Missing required fields"}), 400

    # add a timestamp
    data["submitted_at"] = datetime.datetime.utcnow().isoformat() + "Z"

    # and store into the existing 'courier_companies' collection
    mongo.db.courier_companies.insert_one(data)

    return jsonify({"message": "Application saved successfully"}), 201
