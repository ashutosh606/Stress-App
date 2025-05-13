import bottle
from bottle import *
import pymongo
from pymongo import MongoClient
from datetime import datetime
import time
import json
import os
from bson import json_util, ObjectId
import urllib.parse

from config_vars import *
from ncd_data_json import *

app = Bottle()

# Use the MongoDB URI from config_vars.py

# db = client.castest
client = MongoClient(MONGODB_URI)  # connects to mongodb://127.0.0.1:27017/castest
db = client["castest"]
collection = db["rapid"]


# Keep the existing connection as a backup option or for specific collections
# The Atlas connection is failing with DNS error, so let's use only the primary connection
# If you need to use Atlas later, you can update this URI with the correct server address
# myclient = pymongo.MongoClient(mongo_uri)
# mydb = myclient["stressncd"]

# Using only the primary MongoDB connection
mydb = db


##################### Stress App #####################

@app.route('/')
def root():
    # return template('templates/login.tpl', msg='')
    return static_file('ncdlanding.html', root='templates/')

@app.route('/landing')
def landing():
    # return template('templates/login.tpl', msg='')
    return static_file('ncdlanding.html', root='templates/')

@app.route('/evaluateStress')
def ncd_stress():
    data = get_stress_json()
    return template('templates/assessment_stress_home.tpl', data=data)

@app.route('/ncdScreening')
def ncd_screening():
    data = get_screening_json()
    return template('templates/assessment_screening_home.tpl', data=data)

@app.route('/ncdRapid')
def ncd_rapid():
    data = get_rapid_json()
    return template('templates/assessment_rapid_home.tpl', data=data)

@app.route('/ncdFeasibility')
def ncd_feasibility():
    data = get_feasibility_json() 
    return template('templates/assessment_feasibility_home.tpl', data=data)

@app.route('/ncdhome')
def ncd_home():
    #data = get_stress_json()
    # to be created
    return static_file('ncd_home.html', root='templates/')

@app.route('/ncdscreening_score')
def ncdScreening_score():
    return static_file('assessment_screening_score.html', root='templates/')

@app.route('/ncdfeasibility_score')
def ncdFeasibility_score():
    return static_file('assessment_feasibility_score.html', root='templates/')

@app.route('/ncdrapid_score')
def ncdRapid_score():
    return static_file('assessment_rapid_score.html', root='templates/')

@app.route('/myStressScore')
def assessment_score():
    return static_file('assessment_stress_score.html', root='templates/')

@app.route('/ncdFeasometer')
def ncd_feasometer():
    data = get_feasometer()
    return template('templates/assessment_feasometer_home.tpl', data=data)

@app.route('/ncdOrgRegistration')
def ncd_orgReg():
    data = get_org_json()
    return template('templates/ncd_org_Reg_home.tpl', data=data)

@app.route('/ncdthankyou')
def ncd_thankyou():
    return static_file('ncdThankyou.html', root='templates/')

@app.route('/policy')
def policy():
    return static_file('policy.pdf', root='templates/')

#/ncd_home -- NCD Home page

#/ncd_screening 

#/ncd_rapid

#/ncd_feasibility

#/ncd_workstress

####Other assessments to be added here #######

##################### Stress App #####################

@app.post('/add_ncdstress_assessment')
def add_ncd_Stress():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

    try:
        print("IN add NCD stress")
        assessment_data = json.loads(assessment_data)
        print(assessment_data)

        metadata = assessment_data[60]
        subelements = metadata['metadata']
        organization = subelements['organization']

        if organization == "TVS":
            cur = mydb.stress_tvs.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "BPCL":
            cur = mydb.stress_bpcl.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "HPCL":
            cur = mydb.stress_hpcl.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "RECOUP":
            cur = mydb.stress_recoup.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "SHESI":
            cur = mydb.stress_shesi.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "AMRTPHR":
            cur = mydb.stress_amrtphr.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        elif organization == "SHI":
            cur = mydb.stress_shi.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        else:
            cur = mydb.stress_assessments.insert_one({'ncd_stress_data': assessment_data, 'time_stamp': time_stamp})
        
        print("Inserted stress assessment with ID:", cur.inserted_id)

    except Exception as e:
        print("Error inserting stress data:", e)

    return {'status': 'ok'}


@app.post('/add_ncdfeasibility_assessment')
def add_ncd_feasibility():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

    try:
        assessment_data = json.loads(assessment_data)
        # Store in the database using the MONGODB_URI connection
        db.feasibility_assessments.insert({'ncd_feasibility_data': assessment_data, 'time_stamp': time_stamp})
    except Exception as e:
        print(e)

    return {'status': 'ok'}

@app.post('/add_ncdrapid_assessment')
def add_ncd_rapid():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

  
    try:
        print("Received Data:", assessment_data)  # Log the received data
        assessment_data = json.loads(assessment_data)
        # collection.insert({'ncd_rapid_data': assessment_data, 'time_stamp': time_stamp})
        collection.insert_one({'ncd_rapid_data': assessment_data, 'time_stamp': time_stamp})
        print("Data inserted successfully")
    except Exception as e:
        print("Error inserting data:", e)

    return {'status': 'ok'}

@app.post('/add_ncdscreening_assessment')
def add_ncd_screening():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

    try:
        assessment_data = json.loads(assessment_data)
        # Store in the database using the MONGODB_URI connection
        db.screening_assessments.insert({'ncd_screening_data': assessment_data, 'time_stamp': time_stamp})
    except Exception as e:
        print(e)

    return {'status': 'ok'}

@app.post('/add_ncdfeasometer_assessment')
def add_feasometer():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

    try:
        assessment_data = json.loads(assessment_data)
        # Store in the database using the MONGODB_URI connection
        db.feasometer_assessments.insert({'ncd_feasometer_data': assessment_data, 'time_stamp': time_stamp})
    except Exception as e:
        print(e)

    return {'status': 'ok'}

@app.post('/add_organization_Details')
def add_OrganizationDetails():
    assessment_data = request.forms.get('data')
    time_stamp = time.time()

    try:
        assessment_data = json.loads(assessment_data)
        # Store in the database using the MONGODB_URI connection
        db.organization_details.insert({'organization_data': assessment_data, 'time_stamp': time_stamp})
    except Exception as e:
        print(e)

    return {'status': 'ok'}

@app.post('/add_test_response')
def add_test_response():
    test_name = request.forms.get('test_name')  # Name of the test
    response_data = request.forms.get('data')  # Test response data
    time_stamp = time.time()

    try:
        response_data = json.loads(response_data)
        # Insert into the corresponding collection based on the test name
        db[test_name].insert_one({'response_data': response_data, 'time_stamp': time_stamp})
    except Exception as e:
        print("Error inserting data:", e)
        return {'status': 'error', 'message': str(e)}

    return {'status': 'ok'}

@app.route('/test_db')
def test_db():
    try:
        # List all collections in the database
        collections = db.list_collection_names()
        return {"status": "success", "collections": collections}
    except Exception as e:
        return {"status": "error", "message": str(e)}

######################### Static Routes Start #########################

@app.route(r'/<filename:re:.*\..*>')  # Use raw string to avoid invalid escape sequence
def javascripts(filename):
    return static_file(filename, root='static')

@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

######################### Static Routes End #########################

# Start the server
if __name__ == '__main__':
    host = os.environ.get('HOST', 'localhost')
    port = int(os.environ.get('PORT', 8080))
    app.run(host=host, port=port, debug=True, reloader=True)