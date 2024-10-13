from app import app, db
import datetime
from model import Task, User
from flask import request, jsonify, redirect
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user,login_required, current_user, logout_user
from flask_login import LoginManager


@app.route('/register', methods=["POST"])
def register():
      try: 
            """
            Register a new user into the DB
            """
            data = request.get_json()
            if not data:
                  return jsonify({"message": "No input data provided"}), 400
            email = data.get("email")
            username = data.get("username")
            password = data.get("password")

            if not all([email, username, password]):
                  return jsonify({"message": "All fields are required"}), 400

            existing_user = User.query.filter_by(email=email).first()
            if existing_user:
                  return jsonify({"message": "User already exists"}), 400

            new_user = User(email=email, username=username, password=generate_password_hash(password, method="pbkdf2:sha256", salt_length=8))
            db.session.add(new_user)
            db.session.commit()

            return jsonify({"message": "User created successfully"}), 201
      except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)})


@app.route('/login', methods=["POST"])
def login():
      try:
            data = request.get_json()
            if not data:
                  return jsonify({"message": "No data provided"}), 400

            email = data.get("email")
            password = data.get("password")
            
            #Find user by email
            user = User.query.filter_by(email=email).first()
            if not user:
                  return jsonify({"message": "User not found"}), 404
            
            #Check password
            if not check_password_hash(user.password, password):
                  return jsonify({"message": "Incorrect password"}), 401
            
            login_user(user)
            return jsonify({"message": "Login successful"}), 200
      except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)})
            
      
@app.route("/api/tasks", methods=["GET"])
def get_all_tasks():
      try: 
            """Get all tasks"""
            tasks = Task.query.all()
            if not tasks:
                  return jsonify(message="No tasks available"), 204

            tasks_data = [task.to_json() for task in tasks]
            return jsonify(tasks_data), 200
      except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)})
      

@app.route('/api/tasks', methods=["POST"])
def create_task():
    """Create a new task"""
    data = request.get_json()
    if not data:
        return jsonify({"message": "No input data provided"}), 400

    title = data.get("title")
    description = data.get("description")
    is_completed = data.get("is_completed")
    due_date = data.get("due_date")

    if not all([title, description, is_completed, datetime.datetime.strptime(due_date, "%Y-%m-%d").date()]):
        return jsonify({"message": "All fields are required"}), 400

    try:
        due_date = datetime.datetime.strptime(due_date, "%Y-%m-%d").date()
        is_completed = is_completed.lower() != 'false'
        task = Task(
            title=title,
            description=description,
            is_completed=is_completed ,
            due_date=due_date,
            user_id=current_user.id,
        )
        db.session.add(task)
        db.session.commit()
        return jsonify({"message": "Task created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

#delete task
@app.route('/api/tasks/<int:id>', methods=["DELETE"])
def delete_task(id):
      try:
            task = Task.query.get(id)
            if task is None:
                  return jsonify({"message": "Task not found"}), 404
            db.session.delete(task)
            db.session.commit()
            return jsonify({"message": "Task deleted"}), 200
      except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)})


@app.route('/api/tasks/<int:task_id>', methods=['GET', 'PATCH'])
def get_or_update_task(task_id):
    """Get or update a task"""
    try:
        task = Task.query.get(task_id)
        if task is None:
            return jsonify({"message": "Task not found"}), 404

        if request.method == 'PATCH':
            data = request.get_json()
            if data is None:
                return jsonify({"message": "No input data provided"}), 400

            completed = data.get('is_completed', task.is_completed)
            
            task.title = data.get('title', task.title)
            task.description = data.get('description', task.description)
            task.due_date = datetime.datetime.strptime(data.get('due_date'), "%Y-%m-%d").date() if data.get('due_date') is not None else task.due_date
            task.is_completed = data.get('is_completed').lower() != 'false' if data.get('is_completed') is not None else task.is_completed

            db.session.commit()
            return jsonify({"message": "Task updated successfully"}), 200

        return jsonify(task.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400
