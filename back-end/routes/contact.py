# routes/contact.py
from flask import Blueprint, request, jsonify
from extensions import mongo
import datetime

contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/send", methods=["POST"])
def send_message():
    data = request.get_json() or {}
    required = ["name", "email", "message"]
    if any(not data.get(k) for k in required):
        return jsonify({"error": "Missing required fields"}), 400

    # add timestamp
    data["submitted_at"] = datetime.datetime.utcnow().isoformat() + "Z"
    # insert into your existing 'contacts' collection
    mongo.db.contacts.insert_one(data)

    return jsonify({"message": "Your message has been received"}), 201
