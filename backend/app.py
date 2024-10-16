from os import getenv
from dotenv import load_dotenv
load_dotenv()
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_user, LoginManager, login_required, current_user, logout_user
from flask_cors import CORS

app = Flask(__name__)
app.config["SECRET_KEY"] = getenv("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = getenv("DATABASE_URL") 
app.config["SQLALCHEMY_TRACT_MODIFICATIONS"] = False
CORS(app)
login_manager = LoginManager()
login_manager.init_app(app)

db = SQLAlchemy(app)

import routes
@login_manager.user_loader
def load_user(user_id):
    return db.get_or_404(routes.User, user_id)

with app.app_context():
      db.create_all()

if __name__ == '__main__':
      app.run(debug=True)