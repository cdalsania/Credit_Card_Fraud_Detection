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
