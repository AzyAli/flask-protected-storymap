from flask import Flask, request, redirect, url_for, session, send_from_directory, abort, render_template
from functools import wraps
import os
from dotenv import load_dotenv
from werkzeug.security import safe_join
import logging

load_dotenv()

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SESSION_COOKIE_SECURE'] = True  
app.config['SESSION_COOKIE_HTTPONLY'] = True  
app.config['PERMANENT_SESSION_LIFETIME'] = 1800  

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'logged_in' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        if request.method == 'POST':
            username = request.form.get('username', '')
            password = request.form.get('password', '')
            expected_username = os.getenv('USERNAME')
            expected_password = os.getenv('PASSWORD')
            
            if username == expected_username and password == expected_password:
                session['logged_in'] = True
                session.permanent = True
                return redirect(url_for('storymap'))
            else:
                # Re-render the login page with an error message
                return render_template(
                    'login.html',
                    error="Invalid credentials. Please try again or click the help button on the top right corner."
                )
        else:
            # GET request – just show the login page
            return render_template('login.html')
    
    except Exception as e:
        app.logger.error(f"Login error: {str(e)}", exc_info=True)
        return abort(500)

@app.route('/')
@login_required
def storymap():
    try:
        return send_from_directory('static', 'storymap.html')
    except Exception as e:
        app.logger.error(f"Storymap error: {str(e)}")
        return abort(500)

@app.route('/static/Config.js')
def config_js():
    try:
        with open('static/Config.js', 'r') as file:
            content = file.read()
        
        token = os.getenv("MAPBOX_TOKEN")
        logger.debug(f"Injecting token: {token[:10]}...")
        
        # Replace token in content
        content = content.replace(
            'accessToken: \'\',',
            f'accessToken: \'{token}\','
        )
        
        return content, 200, {'Content-Type': 'application/javascript'}
    except Exception as e:
        logger.error(f"Config.js error: {str(e)}")
        return abort(500)

@app.route('/static/<path:filename>')
def serve_static(filename):
    try:
        safe_path = safe_join('static', filename)
        if not safe_path:
            abort(404)
        return send_from_directory('static', filename)
    except Exception as e:
        app.logger.error(f"Static file error: {str(e)}")
        return abort(404)

@app.errorhandler(404)
def not_found_error(error):
    return "File not found", 404

@app.errorhandler(500)
def internal_error(error):
    return "Internal server error", 500

if __name__ == '__main__':
    app.run(debug=True, ssl_context='adhoc')