# app.py
from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import mongo


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # initialize extensions
    mongo.init_app(app)
    CORS(app)

    # register blueprints
    from routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    from routes.payments import payments_bp
    app.register_blueprint(payments_bp, url_prefix="/api/payments")
    
    from routes.courier import courier_bp
    app.register_blueprint(courier_bp, url_prefix="/api/courier")
    return app

# instantiate at import-time so there's only one App + one Mongo
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
