from flask_pymongo import pymongo
from flask import jsonify
def db_connection_class:

    def __init__(self):
        pass

    def insert_one(data):
        try:

            db.insert_one(data)
            return True
        except e:
            return False

    def get_all():
        try:
            db = client.get_database('profDB')
                    db.insert_one(data)
                    return True
                except e:
                    return False











