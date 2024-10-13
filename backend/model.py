from app import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
      id = db.Column(db.Integer, nullable=False, unique=True, primary_key=True)     
      username = db.Column(db.String(80), nullable=False)
      email = db.Column(db.String(100), nullable=False, unique=True)
      password = db.Column(db.String(80), nullable=False)
      tasks = db.relationship("Task", backref="owner", lazy=True)

      def to_json(self):
            return {
                  "id": self.id,
                  "userName": self.username,
                  "email": self.email,
                  "tasks": [task.to_json() for task in self.tasks]  # Serializing tasks
            }


class Task(db.Model):
      id = db.Column(db.Integer, nullable=False, unique=True, primary_key=True)
      title = db.Column(db.String(100), nullable=False)
      description = db.Column(db.String(150), nullable=False)
      due_date = db.Column(db.DateTime, nullable=False)
      is_completed = db.Column(db.Boolean, nullable=False, default=False)
      user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)  # Corrected foreign key

      def to_json(self):
            return {
                  "id": self.id,
                  "title": self.title,
                  "description": self.description,
                  "due_date": self.due_date,
                  "is_completed": self.is_completed
            }
