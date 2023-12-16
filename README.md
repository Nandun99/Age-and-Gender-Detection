# Age and Gender Detection

A web app that predicts a person's age range, gender and emotion from a photo. The photo can be taken with the webcam or uploaded. Users can then send feedback with their actual age and gender, which is stored for improving the model.

## How It Works
The frontend sends the captured image to a prediction model that is served separately (for example from Google Colab through ngrok) at a `/predict` endpoint. The model returns gender, age range and emotion. Feedback is saved by the Flask backend.

## Project Structure
```
frontend/   React app (webcam capture, upload, results, feedback)
backend/    Flask API that stores feedback and images in MySQL
```

## Tech Stack
- **Frontend:** React 18, Tailwind CSS, Bootstrap, react-webcam, axios
- **Backend:** Flask, Flask-SQLAlchemy, MySQL, gunicorn

## Getting Started

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Update the MySQL connection string in `app.py` to match your setup.

### Frontend
```bash
cd frontend
npm install
npm start
```
The app runs on `http://localhost:3000/`.
