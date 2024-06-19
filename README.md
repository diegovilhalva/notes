

# Notes

## Overview
This is a simple web application for taking and managing notes. It's built using Node.js, Express.js, MongoDB, EJS, Bootstrap, and Passport.js.

## Features
- User authentication with Passport.js using Google OAuth2
- Create, read, update, and delete (CRUD) notes
- Responsive UI using Bootstrap
- Data storage with MongoDB
- Templating with EJS

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/diegovilhalva/notes
   cd notes 
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Define the following variables:
     ```
     MONGODB_URI=mongodb://localhost/notes or use  your atlas url connection
     SESSION_SECRET=your_session_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
     ```
   - Replace `your_google_client_id` and `your_google_client_secret` with your actual Google OAuth2 client ID and client secret.
4. Start the server:
   ```
   npm start
   ```
5. Open your web browser and navigate to `http://localhost:5000`

## Usage
- Register for an account or log in with Google using the "Sign in with Google" button.
- Create new notes by clicking on the "New Note" button.
- View, edit, or delete existing notes from the dashboard.
- Log out when you're done.

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

## License
This project is licensed under the [MIT License](LICENSE).

