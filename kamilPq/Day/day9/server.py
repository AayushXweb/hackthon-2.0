# A very simple Flask Hello World app for you to get started with...

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # <-- enable CORS for all routes

@app.route("/")
def home():
    return "Welcome to the Home Page of samadhan 2.0"

@app.route("/hello")
def hello():
    return "Hello, World!"

students = [
    {"id": 1, "name": "Md Kamil Kaushar Mallick", "course": "B.Tech CSE"},
    {"id": 2, "name": "Prince Raja Bundela", "course": "B.Tech CSE"},
    {"id": 3, "name": "Aayush Kumar", "course": "B.Tech CSE"}
]

@app.route("/students", methods=["GET"])
def get_students():
    return jsonify(students)
