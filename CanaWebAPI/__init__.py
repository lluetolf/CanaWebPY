import os

from flask import Flask, render_template
from flask_cors import CORS

from CanaWebAPI.helper.apiencoder import APIEncoder
from CanaWebAPI.service.FieldRepository import FieldRepository
from CanaWebAPI.service.ZafraRepository import ZafraRepository


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
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

    #
    # Static endpoints
    #
    @app.route('/')
    def index():
        return render_template('index.html')

    #
    # Import endpoints
    #
    from . import field
    app.register_blueprint(field.bp)

    from . import payable
    app.register_blueprint(payable.bp)

#    from . import zafra
#           app.register_blueprint(zafra.bp)

    return app