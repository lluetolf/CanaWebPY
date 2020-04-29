import os

from flask import Flask, render_template, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

from CanaWebAPI.helper.apiencoder import APIEncoder


mongo = PyMongo()
logger = None


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    app.json_encoder = APIEncoder
    CORS(app)

    app.config["MONGO_URI"] = os.getenv("CANAWEB_MONGO")
    mongo.init_app(app)

    #
    # Static endpoints
    #
    @app.route('/')
    def index_html():
        return render_template('index.html')

    @app.route('/upandrunning')
    def index_json():
        return jsonify({"msg": "Up and running!"}), 200

    #
    # Import endpoints
    #
    from .views import auth
    app.register_blueprint(auth.bp)

    from . import field
    app.register_blueprint(field.bp)

    from . import payable
    app.register_blueprint(payable.bp)

#    from . import zafra
#           app.register_blueprint(zafra.bp)

    return app