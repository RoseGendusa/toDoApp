# Todo MERN
# CRUD App

This project is a full-stack Todo CRUD (Create, Read, Update, Delete) application built using React.js for the frontend, Node.js with Express for the backend, and MongoDB as the database. Additionally, it includes Dockerization using Docker and Docker Compose.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
<!-- https://github.com/RoseGendusa/toDoApp.git -->

2. Install dependencies for both the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   npm start(nodemon)

   # Install backend dependencies
   cd ../backend
   npm install
   npm start(nodemon)
   ```

3. Configure the MongoDB connection in the backend:

   Currently `backend/config/db.js` adjusted as to be used MongoDB connection and also information about in Docker.

   In order to use it locally:

   - open `backend/config/.env`
   - update the MongoDB connection string
   - change ENV value as `ENV = LOCAL`

4. Frontend ENV configuration:

   Currently `frontend/.env` adjusted as to be used MongoDB connection and also information about in Docker.

   In order to use it locally:

   - open `fronend/.env`
   - change ENV value as `REACT_APP_ENV = LOCAL`

## Project Structure

The project is organized as follows:

- `frontend`: Contains the React.js frontend code.
- `backend`: Contains the Node.js with Express backend code.
- `/`: Contains Dockerfiles and configurations for Dockerization(all the example files)

## Usage

### Run Locally

1. Start the MongoDB server.

2. Run the backend server:

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on [http://localhost:5000](http://localhost:5000/).

3. Run the frontend:

   ```bash
   cd frontend
   npm start
   ```

   The frontend development server will run on [http://localhost:3000](http://localhost:3000/).

4. Open your browser and go to [http://localhost:3000](http://localhost:3000/) to access the Todo CRUD app.

### Dockeization (Optional) ( in the running in DB but all the files read for docker )

To run the application using Docker and Docker Compose:
/
1. Build the Docker images:

   ```bash
   docker-compose build
   ```

2. Run the Docker containers:

   ```bash
   docker-compose up
   ```
   80:80
   The application will be accessible at [http://localhost:80](http://localhost/).
   #### Delete all docker images from your local
   ```powershell
   docker rmi $(docker images -q)
   ```


## Endpoints

- **GET /api/todos**: Get all todos.
- **GET /api/todos/:id**: Get a specific todo by ID.
- **POST /api/todos**: Create a new todo.
- **PUT /api/todos/:id**: Update a todo by ID.
- **DELETE /api/todos/:id**: Delete a todo by ID.
- **POST /auth/login**: Login user and return token.
- **POST /auth/register**: Register user and return token.

## Swaggers

All the endpoint will be accessible at http://127.0.0.1:5000/docs/swagger/

## Authentication

The application uses basic authentication. Include your token with `Bearer` tag in the authorization headers for authorized access.


# For Attack

## XSS Attack
Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.


## Prevent NoSQL Injection & Sanitize Data
// express-mongo-sanitize


## Filtering and Additional Routes

- **GET /api/todos?search[category]=movie**: Get todos by category.
- **GET /api/todos?search[completed]=true**: Get completed todos.
- Additional routes for custom queries and sorting.

## Mobile Responsiveness

The application is designed to be responsive and usable on various screen sizes.




