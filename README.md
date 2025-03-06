# Younglabs Greetings Web App

## Backend

The backend is built using Node.js and Express. It provides APIs for the frontend to interact with.

### Files

- **server.js**: Entry point of the backend server. It sets up the server and listens on the specified port.
- **src/app.js**: Configures the Express application, including middleware and routes.
- **src/controller/user.controller.js**: Contains the logic for handling user-related requests.
- **src/routes/user.route.js**: Defines the routes for user-related endpoints.

### API Endpoints

- **GET /user/greet**: Greets the user with a message. Requires a `name` query parameter.

### Environment Variables

- **PORT**: The port on which the backend server will run.

## Frontend

The frontend is built using React and Vite. It provides the user interface for interacting with the backend.

### Files

- **src/App.jsx**: Main React component that handles user input and displays messages from the backend.
- **src/main.jsx**: Entry point for the React application.
- **index.html**: Main HTML file for the frontend.

### Environment Variables

- **VITE_BASE_URL**: The base URL for the backend API.

## Running the Application

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `pnpm install`
3. Start the server: `nodemon server.js`

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm run dev`

## License

This project is licensed under the MIT License.