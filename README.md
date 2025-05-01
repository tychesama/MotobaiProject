About Motobai
Motobai is a small, independent business specializing in high-quality motor parts, with a particular focus on oils and lubricants essential for engine health and performance. We aim to provide reliable, accessible, and affordable automotive products for individuals, workshops, and businesses alike.

This application is built to streamline our operations and improve customer experience. Developed using React for the frontend and Django for the backend, the Motobai app allows users to browse our product offerings, manage orders, and stay updated with the latest stock and pricing — all in one place.

At Motobai, we combine technical reliability with personalized service, keeping vehicles running smoothly one drop at a time.



















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
