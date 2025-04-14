# Web Application with Simple Login System

This project is a web application that implements a simple login system using Node.js, Express, and MongoDB. It allows users to register and log in, with their credentials stored securely in a database.

## Project Structure

```
web-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controller files
│   │   └── authController.js # Handles authentication logic
│   ├── models                # Contains model files
│   │   └── userModel.js      # Defines user schema
│   ├── routes                # Contains route files
│   │   └── authRoutes.js     # Defines authentication routes
│   ├── views                 # Contains HTML view files
│   │   ├── login.html        # Login page
│   │   └── register.html     # Registration page
│   └── config                # Contains configuration files
│       └── db.js            # Database connection logic
├── public                    # Contains static files
│   ├── css                   # Contains CSS files
│   │   └── styles.css        # Styles for the application
│   └── js                    # Contains JavaScript files
│       └── scripts.js        # Client-side scripts
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd web-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your database connection string and any other necessary environment variables.

4. **Run the application**:
   ```
   npm start
   ```

5. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000` to access the login page.

## Usage Guidelines

- Users can register by filling out the registration form on the `register.html` page.
- After registration, users can log in using their credentials on the `login.html` page.
- The application uses MongoDB to store user data securely.

## License

This project is licensed under the MIT License.