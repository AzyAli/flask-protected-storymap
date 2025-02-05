# 🌍 Flask Protected Story Map Template

A simple but powerful example of how to create password-protected Mapbox story maps using Flask. This template demonstrates basic authentication, token protection, and interactive storytelling - perfect for organizations wanting to share sensitive geographic data with authorized users.

## 🌱 Why This Project?

After working with NGOs in Ecuador's Choco region, I realized there was a need for protected story maps that could:
- Control access to sensitive conservation data
- Share location information securely
- Maintain interactive features
- Stay lightweight and customizable

## 🛠️ Implementation

This is a minimal example using:
- Flask for the web framework
- Basic authentication (username/password)
- Mapbox GL JS for interactive mapping
- Dynamic token injection for security

## 📁 Project Structure
```bash
📂 flask_storymap/
├── 🔒 .env                    
├── 📄 app.py                  
├── 📝 requirements.txt        
├── 📁 templates/
│   └── 📄 login.html          
└── 📁 static/
    ├── 📄 Config.js           
    ├── 📄 storymap.html       
    └── 📁 Content_website/
        ├── 📁 DECOIN/        
        ├── 📁 Ecominga/       
        ├── 📁 FCAT/          
        ├── 📁 Great_Leaf/     
        ├── 🖼️ images/        
        ├── 📁 Tesoro_Escondido/ 

```

## 🚀 Getting Started

1. Clone this repository
```bash
git clone https://github.com/AzyAli/flask-protected-storymap
cd flask-storymap
```
2. Create virtual environment and install dependencies
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
3. Set up your environment variables in .env:
```bash
MAPBOX_TOKEN=your_mapbox_token
USERNAME=a_username
PASSWORD=a_password
```
4. Run the application
```bash
flask run
```
## 💡 Customization
This is meant as a starting point - you'll want to:

- Implement proper user authentication
- Add your own content and styling
- Configure proper security headers
- Set up proper session management
- Add your own error pages

