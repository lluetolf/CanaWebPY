from datetime import datetime

import dateutil.parser
from flask import (Blueprint, jsonify, request)
from flask import current_app as app

from CanaWebAPI.entities.entity_checks import check_payable
from CanaWebAPI.service.PayableRepository import PayableRepository
from CanaWebAPI.views.LogDecorator import debug_logs
from CanaWebAPI.views.auth import token_required

bp = Blueprint('payables', __name__, url_prefix='/payable')

PayableRepo = PayableRepository()


#
# Field related endpoints
# At some stage should be extracted to a Field Microservice
#
@bp.route("", methods=['GET'])
@token_required
@debug_logs
def get_all(current_user) -> (str, int):
    app.logger.debug("Call: get_all by {}".format(current_user))
    try:
        all_fields = PayableRepo.read_all()
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("latest/<nbr>", methods=['GET'])
@token_required
@debug_logs
def get_latest(current_user, nbr) -> (str, int):
    app.logger.debug("Call: get_latest by {}".format(current_user))
    try:
        all_fields = PayableRepo.read_all(nbr)
        return jsonify(all_fields), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("/<payable_id>", methods=['GET'])
@token_required
@debug_logs
def get(current_user, payable_id) -> (str, int):
    app.logger.debug("Call: current_user by {}".format(current_user))
    if not payable_id:
        return respond_failed("No payable_id provided.")

    try:
        payable = PayableRepo.read_one(payable_id)
        if payable is None:
            return jsonify({}), 204
        else:
            return jsonify(payable), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("/<from_date>/<to_date>", methods=['GET'])
@token_required
@debug_logs
def get_range(current_user, from_date, to_date) -> (str, int):
    app.logger.debug("Call: get_range by {}".format(current_user))
    if not from_date or not to_date:
        return respond_failed("No date range provided.")

    try:
        # Take date part of provided values and add min/max time
        from_date = datetime.combine(dateutil.parser.parse(from_date).date(),
                                     datetime.min.time())
        to_date = datetime.combine(dateutil.parser.parse(to_date).date(),
                                   datetime.max.time())

        if from_date > to_date:
            raise

    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Date range invalid.")

    try:
        payable = PayableRepo.read_range(from_date, to_date)
        if payable is None:
            return jsonify({}), 204
        else:
            return jsonify(payable), 200
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("", methods=['POST'])
@token_required
@debug_logs
def create(current_user) -> (str, int):
    app.logger.debug("Call: create by {}".format(current_user))
    if not request.is_json:
        return respond_failed("No JSON message sent.")

    request.json['lastUpdated'] = datetime.now()
    payable, error = check_payable(request.json)
    if error:
        return respond_failed('Payable validation failed. {}'.format(error))

    try:
        if PayableRepo.create(payable):
            return jsonify(payable), 201
        else:
            return respond_failed('Issues connecting to the DB.', response_code=500)

    except Exception as e:
        app.logger.error("Failed: {}".format(str(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("", methods=['PATCH'])
@token_required
@debug_logs
def update(current_user) -> (str, int):
    app.logger.debug("Call: update by {}".format(current_user))
    if not request.is_json:
        return respond_failed("No JSON message sent.")

    request.json['lastUpdated'] = datetime.now()
    payable, error = check_payable(request.json)
    if error:
        return respond_failed('Payable validation failed. {}'.format(error))

    try:
        if PayableRepo.update(payable):
            return jsonify(payable), 200
        else:
            return respond_failed('Issues connecting to the DB.', response_code=500)
    except Exception as e:
        app.logger.error("Failed to update: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


@bp.route("/<payable_id>", methods=['DELETE'])
@token_required
@debug_logs
def delete(current_user, payable_id) -> (str, int):
    app.logger.debug("Call: delete by {}".format(current_user))
    if not payable_id:
        return respond_failed("No payable_id provided.")

    try:
        if PayableRepo.delete(payable_id):
            return respond_success("Deleted")
        else:
            return respond_failed("Unable to delete payable_id with id: {}".format(payable_id))
    except Exception as e:
        app.logger.error("Failed: {}".format(repr(e)))
        return respond_failed("Request failed internally. Check logs.", response_code=500)


#
# Helper Functions
#
# TODO: extract helpers to shared class for all blueprints
def respond_failed(msg, response_code=400):
    return respond_custom(msg, response_code)


def respond_success(msg):
    return respond_custom(msg, 200)


def respond_custom(msg: str, response_code: int):
    app.logger.info(msg)
    return jsonify({'status': 'success', 'message': msg}), response_code
