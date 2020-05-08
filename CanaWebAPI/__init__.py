from flask import Flask, render_template, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt

from CanaWebAPI.helper.apiencoder import APIEncoder, APIDecoder

mongo = PyMongo()
logger = None
bcrypt = Bcrypt()


def create_app():
    # create and configure the app
    # ENV is set by the FLASK_ENV environment variable, which also sets DEBUG
    app = Flask(__name__,
                instance_relative_config=True,
                template_folder="templates")

    if app.env == 'production':
        from CanaWebAPI.config import ProdConfig
        app.config.from_object(ProdConfig)
    elif app.env == 'testing':
        from CanaWebAPI.config import TestingConfig
        app.config.from_object(TestingConfig)
    else:
        from CanaWebAPI.config import DevConfig
        app.config.from_object(DevConfig)

    app.json_encoder = APIEncoder
    app.json_decoder = APIDecoder
    CORS(app)

    mongo.init_app(app)
    bcrypt.init_app(app)

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

    from CanaWebAPI.views import field
    app.register_blueprint(field.bp)

    from CanaWebAPI.views import payable
    app.register_blueprint(payable.bp)

#    from . import zafra
#           app.register_blueprint(zafra.bp)

    return app
