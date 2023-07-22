from flask import Flask

def create_project():
    project = Flask(__name__)
    project.config['SECRET_KEY'] = '40021370'
    
    from .auth import auth
    from .pages import pages

    project.register_blueprint(auth, url_prefix = '/')
    project.register_blueprint(pages, url_prefix = '/')
    
    return project