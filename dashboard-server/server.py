from __future__ import print_function
import json

from apiclient import discovery
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource
from httplib2 import Http
from oauth2client import client, file, tools

# Initialization of the Backend with open CORS-Policy
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

# Needed Scopes for the Authorization of the Google-Api-Client
SCOPES = "https://www.googleapis.com/auth/forms.responses.readonly https://www.googleapis.com/auth/forms.body"
DISCOVERY_DOC = "https://forms.googleapis.com/$discovery/rest?version=v1"

def setupGoogleFormsApi():

  print('Api setup!')

  # Here we should initiate the authorization process!
  
  # store = file.Storage('token.json')
  # creds = None
  # if not creds or creds.invalid:
  #   flow = client.flow_from_clientsecrets('credentials.json', SCOPES)
  #   creds = tools.run_flow(flow, store)

  # global form_service
  # form_service = discovery.build('forms', 'v1', http=creds.authorize(
  # Http()), discoveryServiceUrl=DISCOVERY_DOC, static_discovery=False)

class Forms(Resource):
  def get(self):
    file = open('surveyData.json')
    data = json.load(file)
    return data
    
    # Here we should use the Google-Api to fetch the Froms-data

    # form_id = '1AtEnO5utgZjT-npLj-rmhd_1oQQU2lwd-SQZOPvOJPs'
    # result = form_service.forms().get(formId=form_id).execute()
    # return result

class FormResults(Resource):
  def get(self):
    file = open('dummyData.json')
    data = json.load(file)
    return data

  # Here we should use the Google-Api to fetch the Froms-Results

  #   form_id = '1AtEnO5utgZjT-npLj-rmhd_1oQQU2lwd-SQZOPvOJPs'
  #   result = form_service.forms().responses().list(formId=form_id).execute()
  #   return result
    

api.add_resource(Forms, "/getForm")
api.add_resource(FormResults, "/getResponses")

@app.before_first_request
def before_first_request_func():
    setupGoogleFormsApi()

if __name__ == "__main__":
  app.run(debug=True)


