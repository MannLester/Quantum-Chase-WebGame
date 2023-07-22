import json
from flask import Blueprint, render_template, request, flash, redirect, url_for

auth = Blueprint('auth', __name__)

user_dict = {}


@auth.route('/register', methods=['GET', 'POST'])
def register():
    with open('website/data/users.json', 'r') as f:
        users = json.load(f)

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')

        if len(username) < 2:
            flash('Username too short', category='error')
        elif any(user['username'] == username for user in users):
            flash('Username already taken', category='error')
        elif not (8 <= len(password) <= 16):
            flash('Password must be between 8 and 16 characters', category='eror')
        elif password != confirm_password:
            flash('Password do not match', category='error')
        else:
            users.append({'username': username, 'password': password})
            with open('website/data/users.json', 'w') as f:
                json.dump(users, f, indent=4)
            flash('Account created!', category='success')
            return redirect(url_for("auth.login"))

    return render_template("register.html")


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        with open('website/data/users.json', 'r') as f:
            users = json.load(f)

        for user in users:
            if username == user['username'] and password == user['password']:
                return redirect(url_for("pages.main_menu"))
        else:
            flash('Invalid username or password', category='error')

    return render_template("login.html")
