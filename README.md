About Motobai
Motobai is a small, independent business focused on selling motor parts — with a strong emphasis on oils and lubricants that keep engines running at peak performance. Our goal is to provide dependable, accessible automotive supplies for local workshops and internal operations.

This internal-use application is built to support and streamline Motobai’s day-to-day workflows. Designed for use by our employees, it offers an efficient and user-friendly interface for managing inventory, tracking orders, and monitoring product data.

👨‍💻 Team
Jose Emmanuel Idpan – Backend Developer (Django)

Ram Christian Nacar – Frontend Developer (React)

Thaddeus Domingo – Quality Assurance & Project Management

⚙️ Tech Features
Built with React (frontend) and Django (backend)

RESTful API integration for smooth data flow

Authentication and user role support

Real-time inventory management

Order tracking and status updates

Modular design for future scalability

At Motobai, we believe that a well-oiled system is just as important as a well-oiled machine.

.
.
.
.
.
.
.
.

.
.
.
.
.

INSTALLATION:

Important stuff that should be installed first if may errors na missing: (google niyo lng)
1. node.js
2. vscode
3. python
4. mysql full (workbench + server) (set password as "root")


How to install:
1. git clone <this link>

2. cd frontend
3. npm install

4. cd backend
5. pip install -r requirements.txt
6. python manage.py makemigrations
6.5. python manage.py migrate
7. create another file in frontend name it .env and put this inside; VITE_API_URL="http://localhost:8000"

8. open workbench and open a server, create a table named "motobai"


How to run:
1. cd frontend
2. npm run dev (keep it on)
3. Open another terminal
4. cd backend
5. python manage.py runserver

possible errors:
- python command not working: https://datatofish.com/add-python-to-windows-path/
- pip not working: https://pip.pypa.io/en/stable/installation/
- localhost required access: in /backend/backend/settings.py find password and rename it to "root" or what you saved when installing mysql
