# Full-fledged Stock Prediction Portal

## Overview

This repository contains a **full-fledged stock prediction portal** built using **Python, Django REST Framework, React.js, Vite, and Machine Learning**. The application leverages Machine Learning techniques to provide stock predictions and offers a seamless user experience with a modern frontend and a robust backend API.

## Features

- **Machine Learning-based Stock Prediction**
- **RESTful API using Django REST Framework**
- **Frontend built with React.js and Vite for optimal performance**
- **Interactive data visualization for stock trends**
- **User authentication and authorization**
- **Responsive and user-friendly UI**

## Tech Stack

### Backend:

- **Python**
- **Django REST Framework**
- **Machine Learning (Scikit-learn, TensorFlow, or other ML libraries as applicable)**

### Frontend:

- **React.js**
- **Vite**

### Database:

- **SQLite**

## Installation

### Prerequisites:

- Python 3.10.12
- Node.js 22 LTS
- Virtual Environment (venv.)

### Backend Setup:

```sh
# Clone the repository
git clone https://github.com/bnmonteiro/stock-prediction-portal.git
cd stock-prediction-portal

# Create virtual environment and activate it
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```

### Frontend Setup:

```sh
cd frontend  # Navigate to the frontend directory

# Install dependencies
npm install

# Start frontend development server
npm run dev
```

## Usage

Once both the backend and frontend servers are running, open your browser and navigate to:

- **Frontend:** `http://localhost:5173/`
- **Backend API:** `http://localhost:8000/api/`

## API Endpoints

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/predict`       | Predict stock trends |
| POST   | `/api/auth/register` | Register new user    |
| POST   | `/api/auth/login`    | Login user           |

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact

For any queries or collaborations, reach out at [bnmonteiro2@gmail.com].
