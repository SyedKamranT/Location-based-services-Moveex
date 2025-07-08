# app.py
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS

from config import Config

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Extensions
    mongo.init_app(app)
    CORS(app)

    # Blueprints
    from routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    # app.py (inside create_app, after auth)
    from routes.payments import payments_bp
    app.register_blueprint(payments_bp, url_prefix="/api/payments")


    # (We’ll add payments.py and courier.py blueprints later)
    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
