# routes/payments.py
from flask import Blueprint, request, jsonify, current_app
from app import mongo
import razorpay
import datetime

payments_bp = Blueprint("payments", __name__)

# Initialize Razorpay client
razorpay_client = razorpay.Client(
    auth=(
        current_app.config["RAZORPAY_KEY_ID"],
        current_app.config["RAZORPAY_KEY_SECRET"]
    )
)

@payments_bp.route("/record", methods=["POST"])
def record_payment():
    data = request.get_json()
    required = [
        "razorpay_payment_id",
        "razorpay_order_id",
        "razorpay_signature",
        "user_id",
        "request_id",
        "amount"
    ]
    if not data or any(field not in data for field in required):
        return jsonify({"error": "Missing required fields"}), 400

    # 1) Verify signature
    try:
        razorpay_client.utility.verify_payment_signature({
            "razorpay_order_id": data["razorpay_order_id"],
            "razorpay_payment_id": data["razorpay_payment_id"],
            "razorpay_signature": data["razorpay_signature"]
        })
    except razorpay.errors.SignatureVerificationError:
        return jsonify({"error": "Invalid payment signature"}), 400

    # 2) Record payment
    payment_doc = {
        "user_id": data["user_id"],
        "request_id": data["request_id"],
        "amount": data["amount"],
        "payment_method": "Razorpay",
        "status": "Success",
        "transaction_id": data["razorpay_payment_id"],
        "timestamp": datetime.datetime.utcnow().isoformat() + "Z"
    }
    mongo.db.payments.insert_one(payment_doc)

    return jsonify({"message": "Payment recorded successfully"}), 201
