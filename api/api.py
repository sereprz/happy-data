import re
import requests
from flask import Flask


ERROR_MESSAGE = {'number': -1, 'message': 'Bad URL'}

app = Flask(__name__)


@app.route('/people-in-space')
def get_people_in_space():
    r = requests.get('http://api.open-notify.org/astros.json')
    try:
        return {'number': r.json()['number'],
                'message': 'People in space'}
    except JSONDecodeError:
        return ERROR_MESSAGE

@app.route('/math-fact')
def get_math_fact():
    r = requests.get('http://numbersapi.com/random/math')
    if r.status_code == 200:
        return {'number': re.findall(r'^\d+', r.text)[0],
                'message': re.split(r'^\d+\s', r.text)[-1]}
    else:
        return ERROR_MESSAGE
