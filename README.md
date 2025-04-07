# Academic Profile Analytics System

## Overview
This project is a full-stack application designed to analyze academic profiles, visualize citation trends, and manage publications and collaborations. It consists of:
- **Frontend**: An Angular-based web application with interactive visualizations.
- **Backend**: A Flask REST API for data management and processing.
- **Database**: MongoDB for storing professor data, publications, collaborations, and citation trends.

---

## Frontend

### **Technologies Used**
- **Angular 17+**: Framework for building dynamic web applications.
- **Angular Material**: UI components for responsive design.
- **d3.js and @swimlane/ngx-graph**: For creating interactive charts.
- **TypeScript**: Strongly typed programming language for Angular.

### **Setup Instructions**
1. Install Node.js (v18 or later) and Angular CLI.
2. Navigate to the `frontend` directory:
   cd frontend
   npm install
3.  Start the development server:
    ng serve --port 4200


### **Key Features**
- **Dynamic Forms**: Add, edit, and delete professor details and publications.
- **Charts**: Visualize citation trends, collaboration frequency, and concept scores using bubble charts and bar charts.
- **Material Design**: Responsive UI with Angular Material components.

---

## Backend

### **Technologies Used**
- **Flask**: Lightweight Python web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing professor data and publications.
- **Flask-CORS**: Middleware to enable cross-origin requests between frontend and backend.
- **pymongo**: MongoDB driver for Python.

### **Setup Instructions**
1. Install Python (v3.9 or later) and MongoDB (v6.0 or later).
2. Navigate to the `backend` directory:
   cd backend
   python -m venv venv
   source venv/bin/activate
3. Start the Flask server:
   python3 app.py

### **API Endpoints**
| Endpoint                | Method | Description                     |
|-------------------------|--------|---------------------------------|
| `/professor/<author_id>` | GET    | Retrieve professor data         |
| `/professor`             | POST   | Add a new professor             |
| `/professor/<author_id>` | PUT    | Update professor details        |
| `/professor/<author_id>` | DELETE | Delete professor data           |

---