###############################################
# Import Dependencies
###############################################

from flask import Flask, render_template, jsonify, request
from os import environ
import json
import os
from config import CSV_FILE_URL
import pandas as pd

###############################################
# Flask Setup & Access Environ Variables
###############################################

# Creating new application of the flask module
app = Flask(__name__)

csv_file_path = environ.get('CSV_FILE_PATH') or CSV_FILE_URL

###############################################
# Flask Routes
###############################################

# route to fetch page data
@app.route('/fetchpagedata/<pageNumber>')
def fetchpagedata(pageNumber):

    # setting number of rows per page
    nPerPage = 100

    # finding first row number for current page
    skipCount = ( ( int(pageNumber) - 1 ) * nPerPage ) + 1 if (int(pageNumber) > 0) else 1 

    header_list = ["Time", 
                   "V1", 
                   "V2", 
                   "V3", 
                   "V4", 
                   "V5", 
                   "V6", 
                   "V7", 
                   "V8", 
                   "V9", 
                   "V10", 
                   "V11", 
                   "V12", 
                   "V13", 
                   "V14", 
                   "V15", 
                   "V16", 
                   "V17", 
                   "V18", 
                   "V19", 
                   "V20", 
                   "V21", 
                   "V22", 
                   "V23", 
                   "V24", 
                   "V25", 
                   "V26", 
                   "V27", 
                   "V28", 
                   "Amount", 
                   "Class"]

    # Fetch data from database
    df = pd.read_csv(csv_file_path, 
                     delimiter = ',', 
                     names = header_list, 
                     skiprows = skipCount, 
                     nrows = nPerPage)

    # Convert dataframe to array of dictionary
    data = df.to_dict('records')

    return jsonify(data)

# Routes that will render html templates
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/navbar')
def navbar():
    return render_template('navbar.html')

@app.route('/footer')
def footer():
    return render_template('footer.html')

@app.route('/data')
def data():
    return render_template('data.html')

@app.route('/research')
def research():
    return render_template('research.html')

@app.route('/predictions')
def predictions():
    return render_template('predictions.html')

@app.route('/conclusions')
def conclusions():
    return render_template('conclusions.html')

@app.route('/about')
def about():
    return render_template('about.html')

###############################################
# Run the Flask Application
###############################################

# Spin-up the Flask Application
if __name__ == "__main__":
    app.run(debug=True)