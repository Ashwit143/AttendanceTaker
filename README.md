# Attendance Taker

A QR-based Attendance Management System built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, Cookies, and Excel Processing.

## Features

### Authentication & Authorization

* Professor Registration
* Professor Login
* JWT-based Authentication
* Cookie-based Session Management
* Protected Routes using Middleware
* Secure Logout

### Register Management

* Create Attendance Registers
* Upload Student Lists using Excel Files
* Separate Registers for Different Subjects and Sections
* Professor-specific Registers

### QR Attendance System

* Generate QR Codes for Attendance
* Unique QR Token for Every Session
* QR Expiry Protection
* Secure Attendance Submission

### Attendance Processing

* Student scans QR Code
* Student enters Name and Roll Number
* Student verified against uploaded Excel Register
* Attendance automatically marked in Excel
* Date-wise attendance tracking

### Multi-Professor Support

* Each professor can access only their own registers
* Register ownership verification
* Secure QR generation for owned registers only

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* Cookies
* bcrypt

### File Handling

* Multer
* XLSX

### QR Generation

* QRCode
* UUID

### Template Engine

* EJS

## Project Structure

```text
AttendanceTaker
│
├── controllers
│   ├── authController.js
│   ├── registerController.js
│   ├── attendanceController.js
│   └── serviceController.js
│
├── routes
│   ├── authRoutes.js
│   ├── registerRoutes.js
│   ├── attendanceRoutes.js
│   └── serviceRoutes.js
│
├── middlewares
│   └── auth.js
│
├── services
│   └── attendanceServices.js
│
├── models
│   ├── professor.js
│   ├── register.js
│   └── qrcode.js
│
├── views
│   ├── dashboard.ejs
│   ├── registers.ejs
│   ├── generate.ejs
│   ├── form.ejs
│   ├── success.ejs
│   └── ...
│
├── uploads
│
├── attendance.js
├── .env
└── package.json
```



## Workflow

### Professor

1. Register/Login
2. Create Register
3. Upload Excel Student List
4. Generate QR Code
5. Display QR in Classroom

### Student

1. Scan QR Code
2. Fill Name and Roll Number
3. Submit Attendance

### System

1. Validates Student
2. Marks Attendance in Excel
3. Saves Attendance Record
4. Shows Success Page

## Security Features

* JWT Authentication
* Cookie-based Sessions
* Protected Routes
* Professor Ownership Verification
* QR Expiry Validation
* Password Hashing using bcrypt

## Future Improvements

* Cloud Storage for Excel Files
* Attendance Analytics Dashboard
* Attendance Reports
* Download Attendance Sheets
* Deployment on Render/Railway
* Mobile-Friendly UI

## Author

**Uduthala Ashwit**

B.Tech Student | Full Stack Developer

Built as a practical project to automate classroom attendance using QR Codes and Excel-based record management.
