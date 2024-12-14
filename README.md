Generative Mail App

Table of Contents
Introduction
Features
Screenshots
Installation
Backend Setup
Frontend Setup
Environment Variables
Backend .env Variables
Frontend .env Variables
Usage
Contributing
License
Introduction
Generative Mail App is a full-stack web application that allows users to login, chat, and send emails seamlessly. Built with a robust backend and a responsive frontend, this application leverages modern technologies to provide a smooth user experience.

Features
Login: Secure authentication using Google OAuth.
Chat: Real-time messaging functionality.
Send Email: Compose and send emails directly from the app.
Screenshots
Login

Chat

Send Email

Replace path-to-*.png with the actual paths to your images.

Installation
To get the project up and running on your local machine, follow these steps.

Prerequisites
Node.js installed on your machine.
Git installed.
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/generative-mail-app.git
cd generative-mail-app
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add the following variables:

env
Copy code
port="your_port_number"
MongoUrl="your_mongodb_connection_string"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
REDIRECT_URI="your_frontend_url"
FrontendUrl="your_frontend_origin_url"
port: The port number on which the backend server will run.
MongoUrl: Your MongoDB connection string.
GOOGLE_CLIENT_ID: Your Google OAuth client ID.
GOOGLE_CLIENT_SECRET: Your Google OAuth client secret.
REDIRECT_URI: The URI to redirect to after authentication (usually your frontend URL).
FrontendUrl: The origin URL for CORS or your frontend URL.
Start the backend server:

bash
Copy code
npm run server
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../generative-mail-app
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the generative-mail-app directory and add the following variables:

env
Copy code
VITE_GOOGLE_AI_API_KEY="your_google_ai_studio_api_key"
VITE_GOOGLE_CLIENT_ID="your_google_client_id"
VITE_BACKEND_URL="your_backend_url"
VITE_GOOGLE_AI_API_KEY: Your Google AI Studio API key.
VITE_GOOGLE_CLIENT_ID: Your Google OAuth client ID.
VITE_BACKEND_URL: The URL where your backend server is running.
Start the frontend development server:

bash
Copy code
npm run dev
Environment Variables
Backend .env Variables
Variable	Description
port	Port number for the backend server
MongoUrl	MongoDB connection string
GOOGLE_CLIENT_ID	Google OAuth client ID
GOOGLE_CLIENT_SECRET	Google OAuth client secret
REDIRECT_URI	URI to redirect after authentication
FrontendUrl	Frontend origin URL for CORS or frontend URL
Frontend .env Variables
Variable	Description
VITE_GOOGLE_AI_API_KEY	Google AI Studio API key
VITE_GOOGLE_CLIENT_ID	Google OAuth client ID
VITE_BACKEND_URL	Backend server URL
Usage
Start the Backend Server:

Ensure that the backend server is running by following the Backend Setup instructions.

Start the Frontend Server:

Ensure that the frontend development server is running by following the Frontend Setup instructions.

Access the Application:

Open your browser and navigate to http://localhost:your_frontend_port to use the Generative Mail App.
