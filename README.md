# Generative Mail App

![image](https://github.com/user-attachments/assets/38049438-7b95-4a28-a5c3-9b4c72eded72)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
  - [Backend `.env` Variables](#backend-env-variables)
  - [Frontend `.env` Variables](#frontend-env-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Generative Mail App is a full-stack web application that allows users to **login**, **chat**, and **send emails** seamlessly. Built with a robust backend and a responsive frontend, this application leverages modern technologies to provide a smooth user experience.

## Features

- **Login:** Secure authentication using Google OAuth.
- **Chat:** Real-time messaging functionality.
- **Send Email:** Compose and send emails directly from the app.

## Screenshots

### Login

![Login Screenshot](path-to-login-image.png)

### Chat

![Chat Screenshot](path-to-chat-image.png)

### Send Email

![Send Email Screenshot](path-to-send-email-image.png)

*Replace `path-to-*.png` with the actual paths to your images.*

## Installation

To get the project up and running on your local machine, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) installed.

### Clone the Repository

```bash
git clone https://github.com/your-username/generative-mail-app.git
cd generative-mail-app

Backend Setup
Navigate to the backend directory:

bash
Copy code

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

Usage
Start the Backend Server:

Ensure that the backend server is running by following the Backend Setup instructions.

Start the Frontend Server:

Ensure that the frontend development server is running by following the Frontend Setup instructions.

Access the Application:

Open your browser and navigate to http://localhost:your_frontend_port to use the Generative Mail App.
