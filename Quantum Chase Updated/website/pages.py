from flask import Blueprint, render_template, request, redirect, url_for
from random import sample, shuffle

pages = Blueprint('pages', __name__)

@pages.route('/')
def home():
    return render_template('home.html')


@pages.route('/menu', methods = ['GET'])
def main_menu():
    return render_template("menu.html")

@pages.route('/loadout/<sdg>', methods=['POST','GET'])
def loadout(sdg):
    if request.method == 'POST':
        passive = request.form.get('passive')
        if passive == 'green_button':
            chosen_passive = "Vitality Cascade"
        elif passive == 'yellow_button':
            chosen_passive = "Aegis Flux"
        elif passive == 'blue_button':
            chosen_passive = "Unleashed Arsenal"
        elif passive == 'red_button':
            chosen_passive = "Risky Refinement"
        return redirect(url_for("pages.skills", passive = chosen_passive))
    return render_template("loadout.html")

@pages.route('/skills')
def skills():
    chosen_passive = request.args.get("passive")
    if chosen_passive == "Unleashed Arsenal":
        counter = 3
    else:
        counter = 2
    return render_template("skills.html", passive = chosen_passive, skills_counter = counter)

@pages.route('/how_to_play')
def how_to_play():
    return render_template("how_to_play.html")

