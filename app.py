###############################################
# Import Dependencies
###############################################

from flask import Flask, render_template, jsonify, request
from os import environ
import json
import os
from config import CSV_FILE_URL
import pandas as pd

