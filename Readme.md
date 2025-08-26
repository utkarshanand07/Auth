# CastleBlack Auth

**CastleBlack Auth** is a full-stack authentication system designed to handle user registration, login, and session management. Built with **Node.js**, **Express.js**, and **MongoDB**, it offers a secure and scalable solution for modern web applications, featuring email/password login, Google OAuth, password reset, and more.

## 🚀 Features

- **Multiple Authentication Methods**: Standard email/password signup and login, plus **Google OAuth 2.0** integration.
- **JWT-Based Authentication**: Implements JSON Web Tokens for secure session management.
- **Email Verification**: New users receive a verification code via email to activate their account.
- **Secure Password Reset**: Functionality for users to securely reset their password via an email link.
- **Profile Picture Uploads**: Users can update their profile picture, with images hosted on **Cloudinary**.
- **Automated Email Notifications**: Sends welcome emails, verification codes, and password reset instructions.
- **Protected Routes & Session Checking**: Middleware to protect backend routes and check user authentication status.
- **Secure Environment Variables**: Supports `.env` for managing sensitive keys and credentials.

## 🛠️ Tech Stack

### Frontend:
- React.js

### Backend:
- Node.js with Express.js
- JSON Web Token (JWT) for authentication
- Bcrypt for password hashing
- Crypto for token generation
- Nodemailer (via Mailtrap) for sending emails

### Database:
- MongoDB with Mongoose

### Cloud Services:
- **Cloudinary** for media storage
- **Google OAuth 2.0** for authentication

## 📂 Project Structure
```
Auth/
│── client/      # Frontend (React)
│── server/      # Backend (Express)
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
└── README.md
```

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone [https://github.com/utkarshanand07/Auth.git](https://github.com/utkarshanand07/Auth.git)
cd Auth
```

### 2️⃣ Install Dependencies
#### Client
```sh
cd client
npm install
```
#### Server
```sh
cd server
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the `server/` directory with the following format:
```ini
# Server Configuration
PORT=your_preferred_port
CLIENT_URL=http://localhost:5173

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email Service (e.g., Mailtrap)
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_pass
```

### 4️⃣ Run the Application
#### Start Frontend & Backend (Development Mode)
```sh
# In client/
npm run dev

# In server/
npm run dev
```

## 📜 API Endpoints
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/signup` | Register a new user | No |
| POST | `/api/auth/login` | Login an existing user | No |
| POST | `/api/auth/logout` | Log out the current user | No |
| POST | `/api/auth/google` | Authenticate with Google | No |
| POST | `/api/auth/verify-email` | Verify user's email with a code | No |
| POST | `/api/auth/forgot-password` | Send a password reset link | No |
| POST | `/api/auth/reset-password/:token` | Reset password with a token | No |
| GET | `/api/auth/check-auth` | Check if user is authenticated | Yes |
| PUT | `/api/auth/update-profile` | Update user's profile picture | Yes |


## 🚀 Deployment
For deploying CastleBlack Auth, make sure you:
1. Set up a MongoDB Atlas instance.
2. Configure Cloudinary for media storage.
3. Set up Google OAuth credentials in the Google Cloud Console.
4. Use a process manager like **PM2** for server uptime.
5. Deploy frontend on **Vercel** or **Netlify**.
6. Deploy backend on **Render** or **Heroku**.

## 🎯 Contribution
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push the changes: `git push origin feature-branch`.
5. Create a Pull Request.

## 📄 License
This project is licensed under the **MIT License**.

## 🐾 Connect With Us
- **Project Link:** [CastleBlack Auth on GitHub](https://github.com/utkarshanand07/Auth)
- **Author:** [Utkarsh Anand](https://github.com/utkarshanand07)

---

⭐ **If you like this project, consider giving it a star!** ⭐
