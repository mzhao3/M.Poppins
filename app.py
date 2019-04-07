'''
Poppins - Karen Li, Kaitlin Wan, Clara Mohri, Maggie Zhou
SoftDev p6
P #04: Viz. Not to be confused with vis or vis-à-vis
2019-04-05
'''

from flask import Flask,render_template, request, session, url_for, redirect, flash

import os
app = Flask(__name__) #create instance of class flask

# app.secret_key = os.urandom(32)


@app.route("/", methods = ["GET", "POST"])
def hello_world():
    return render_template("land.html")

@app.route("/1", methods = ["GET", "POST"])
def app1():
    return render_template("spending.html")


@app.route("/2", methods = ["GET", "POST"])
def app2():
    return render_template("test.html")


@app.route("/3", methods = ["GET", "POST"])
def app3():
    pass


if __name__ == "__main__":
    app.debug = True
    app.run()
