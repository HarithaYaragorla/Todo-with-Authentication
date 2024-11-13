# To-Do List Application

This is a full-stack To-Do List application built using React for the frontend and Node.js (with Express) for the backend. The application allows users to register, log in, create, update, and delete tasks. The tasks can be marked as completed, and the interface updates dynamically based on user actions.

## Features
- **User Authentication**: Users can register and log in to manage their tasks securely.
- **CRUD Operations**: Users can create, read, update, and delete tasks.
- **Task Completion**: Users can mark tasks as completed, visually striking them through the UI.

## Tech Stack

### Frontend:
- **React**: Used for building the user interface and managing state.
- **React Router**: Used for routing and navigation.
- **CSS**: Styled with custom CSS to provide a clean and modern UI.

### Backend:
- **Node.js**: Backend server running on Node.js using Express.
- **MongoDB**: Used as the database to store user data and tasks.
- **JWT (JSON Web Tokens)**: Used for authenticating and authorizing users.

### Libraries and Tools:
- **Bcryptjs**: For hashing passwords securely.
- **JWT**: For token-based authentication.
- **dotenv**: For managing environment variables.
- **Cors**: To handle cross-origin requests.

## Setup Instructions

### 1. Clone the Repository:
    git clone 
    cd todo-app https://github.com/HarithaYaragorla/Todo-with-Authentication.git

### 2. Backend Setup (Node.js) : Navigate to the backend folder:
    cd backend

### 2.1. Install the necessary dependencies:
    npm install

### 2.2. Create a .env file in the backend folder and add the following variables:
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret-key

### 2.3. Start the backend server:
    npm start


### 3. Frontend Setup (React): Navigate to the frontend folder:
    cd frontend

### 3.1. Install the necessary dependencies:
    npm install

### 3.2. Start the frontend development server:
    npm start


The React app will be accessible at http://localhost:3000 and the backend API will run on http://localhost:5000