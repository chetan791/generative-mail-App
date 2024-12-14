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

![Screenshot 2024-12-14 094134](https://github.com/user-attachments/assets/f0a1e852-fb53-4d06-b566-0b49f6f6b3bd)

### Chat

![Screenshot 2024-12-14 094104](https://github.com/user-attachments/assets/431667f5-8a47-49d6-974f-0182e1a0d9ad)

### Send Email

![Screenshot 2024-12-14 094125](https://github.com/user-attachments/assets/48d152de-bc5f-43b1-ae57-d93a9d70ea81)

## Installation

To get the project up and running on your local machine, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) installed.

### Clone the Repository

```bash
git clone https://github.com/chetan791/generative-mail-App.git
cd generative-mail-app

Backend Setup
Navigate to the backend directory:

cd backend

Install the dependencies:

npm install

Create a .env file in the backend directory and add the following variables:

port="your_port_number"
MongoUrl="your_mongodb_connection_string"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
REDIRECT_URI="your_frontend_url"
FrontendUrl="your_frontend_origin_url"

Start the backend server:

npm run server


Frontend Setup
Navigate to the frontend directory:

cd ../generative-mail-app

Install the dependencies:

npm install

Create a .env file in the generative-mail-app directory and add the following variables:

VITE_GOOGLE_AI_API_KEY="your_google_ai_studio_api_key"
VITE_GOOGLE_CLIENT_ID="your_google_client_id"
VITE_BACKEND_URL="your_backend_url"

Start the frontend development server:

npm run dev

Usage
Start the Backend Server:

Ensure that the backend server is running by following the Backend Setup instructions.

Start the Frontend Server:

Ensure that the frontend development server is running by following the Frontend Setup instructions.

Access the Application:

Open your browser and navigate to http://localhost:your_frontend_port to use the Generative Mail App.
