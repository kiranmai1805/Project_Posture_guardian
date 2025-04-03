Posture Guardian - Posture Correction App

Overview

Posture Guardian is a mobile application that helps users maintain a correct posture using real-time body tracking and phone tilt sensors. The app detects incorrect posture and provides alerts, recommendations, and improvements to prevent musculoskeletal issues caused by poor sitting or standing posture.

Features

📷 Real-time posture detection using the device camera.

📱 Phone tilt monitoring via accelerometer sensors.

🔔 Alerts & notifications for incorrect posture.

📊 Posture analysis & history tracking.

🤖 Chatbot for guidance on posture improvement.

📌 Personalized exercise recommendations based on posture habits.

Technology Stack

Frontend (React Native - Mobile Application)

Framework: React Native (Expo CLI)

Key Libraries:

expo-camera - Captures live video.

@tensorflow/tfjs & @tensorflow-models/posenet - Real-time pose detection.

expo-sensors - Monitors phone tilt.

Backend (Flask - Server Processing)

Framework: Flask (Python)

Libraries:

OpenCV - Image processing.

MediaPipe Pose - Posture analysis.

NumPy - Numerical computations.

Installation & Setup

Prerequisites

Node.js & Expo CLI installed for React Native.

Python 3 with Flask and OpenCV installed.

Frontend (React Native)

Clone the repository:

git clone https://github.com/Project_Posture_guardian.git
cd Project_Posture_guardian

Install dependencies:

npm install

Run the application:

expo start

Backend (Flask Server)

Navigate to the backend folder:

cd backend

Create a virtual environment:

python -m venv env
source env/bin/activate  # (or `env\Scripts\activate` for Windows)

Install dependencies:

pip install -r requirements.txt

Start the Flask server:

python app.py

How It Works

The user starts the app and grants camera & sensor permissions.

The app detects body posture in real time using PoseNet.

If bad posture is detected, an alert is sent.

The captured image is sent to the backend for further analysis.

Users receive feedback and recommendations on improving posture.

Future Enhancements

🗣 Voice alerts for posture correction.

⏳ Advanced posture tracking & analytics.

⌚ Integration with wearables for better posture detection.

💬 Improved chatbot features for posture-related guidance.

Contributors

D. Kiranmai Meghana - Developer & Designer



