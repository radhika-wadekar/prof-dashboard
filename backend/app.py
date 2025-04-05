from flask import Flask,jsonify
from flask_pymongo import pymongo
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
CONNECTION_STRING = "mongodb+srv://rsw4:Kj1QJ1bO37k2uhfD@profdb.kzu5six.mongodb.net/?retryWrites=true&w=majority&appName=profDB"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('profDB')
@app.route('/professor', methods=['POST'])
def insert_one():
    try:
        data = request.json
        db.professor_data.insert_one(data)
        return jsonify({}),200
    except:
        return jsonify({}),500


@app.route('/professor', methods=['GET'])
def get_all():
    try:
        prof_list = []
        for prof in db.professor_data.find():
            prof['_id'] = str(prof['_id'])
            prof_list.append(prof)
        return jsonify(prof_list),200
    except:
        return jsonify({}),500

@app.route('/professor/<author_id>',methods=['GET'])
def get_one(author_id):
    try:
        author_id = "https://openalex.org/"+author_id
        query = {'author_id':author_id}
        prof = db.professor_data.find_one(query)
        prof['_id'] = str(prof['_id'])
        return jsonify(prof),200
    except Exception as e:
        return jsonify(str(e)),500

@app.route('/professor/<author_id>', methods=['PUT'])
def update_one(author_id):
    try:
        data = request.json
        query = {'author_id':author_id}
        result = db.professor_data.update_one(query, {"$set": data})
        if result.matched_count == 0:
            return jsonify({}),404
        return jsonify({}),200
    except:
        return jsonify({}),500

@app.route('/professor/<author_id>', methods=['DELETE'])
def delete_one(author_id):
    try:
        data = request.json
        query = {'author_id':author_id}
        result = db.professor_data.delete_one(query)
        if result.deleted_count == 0:
            return jsonify({}),404
        return jsonify({}),200
    except:
        return jsonify({}),500




if __name__ == '__main__':
    app.run(debug=True)
