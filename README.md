# Hama Bwana

**Hama Bwana** is a property rental platform that allows users to register, log in, post rentals, and search for available houses on a map. It is built with a modern tech stack using React for the frontend, Node.js with Express for the backend, and MongoDB/MySQL for the database.

![Hama Bwana Banner](./assets/logo1.png)
)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- User registration and login
- User profile with uploaded profile picture and personal description
- Ability to post rentals, including images, videos, and descriptions
- View available rentals on a map using **Leaflet** and **react-leaflet**
- Rental search feature with filters for location (Provinces, Counties)
- Responsive design optimized for both desktop and mobile

## Technologies Used

- **Frontend**:
  - React.js
  - Axios
  - React Router DOM
  - Leaflet and React-Leaflet for map integration
  - FontAwesome for icons
  
- **Backend**:
  - Node.js
  - Express.js
  - Sequelize ORM (with MySQL)
  - JWT for authentication
  - Multer for handling file uploads (images and videos)
  
- **Database**:
  - MySQL based on .env configuration)
  
- **Hosting**:
  - GitHub Pages for frontend deployment
  - Backend deployed on a Node.js server (to be configured)

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14+)
- npm or yarn
- MongoDB or MySQL (depending on your configuration)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/donmaleek/hama-bwana.git
   cd hama-bwana/backend
Install backend dependencies:

bash

npm install

Configure environment variables in a .env file:

env

JWT_SECRET=your_jwt_secret_key
MYSQL_URI=mysql://root:password@localhost:3306/hama_bwana
DB_URI=mongodb://username:password@localhost:27017/hama_bwana

Start the backend server:

bash

nodemon index.js


Frontend Setup

    Navigate to the frontend folder:

    bash

cd ../frontend

Install frontend dependencies:

bash

npm install

Run the development server:

bash

npm start

(Optional) To deploy the frontend to GitHub Pages:

bash

npm run deploy


###Usage
User Roles:

    Guest: Can view rentals, use the search filters, and see details of the properties.
    Registered Users: Can post their own rentals, edit profiles, and view a personalized list of rentals they've posted.

Navigation:

    Home: Search for rentals by province, county, and sub-county.
    Featured Rentals: Displays rentals that are marked as featured.
    Register/Login: Users can register and log in to access the platform features.

API Endpoints

Here are some of the key API endpoints used in the project:

    POST /register: Register a new user
    POST /login: Authenticate and log in a user
    GET /rentals: Fetch all available rentals
    POST /rentals: Post a new rental (authenticated users only)
    GET /profile: Get the authenticated user's profile

Troubleshooting

    Issue: MODULE_NOT_FOUND error when starting the backend.
        Solution: Ensure you have installed all dependencies and the correct .env file is in place with accurate database credentials.

    Issue: Frontend doesn't display correctly after pushing to GitHub Pages.
        Solution: Check if you have correctly set the homepage in package.json to the correct GitHub Pages URL.

Contributing

We welcome contributions! To contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Commit your changes (git commit -m "Add a new feature").
    Push to the branch (git push origin feature-branch).
    Open a Pull Request.

License

This project is licensed under the MIT License - see the LICENSE file for details.
