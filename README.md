<img width="850" height="550" alt="Screenshot 2026-06-20 202426" src="https://github.com/user-attachments/assets/9dceafcb-d27c-4116-91c1-7de4e6fdac84" />

<img width="850" height="550" alt="Screenshot 2026-06-20 202438" src="https://github.com/user-attachments/assets/aa92632f-7df0-4ed3-aeff-a8c477d9e764" />

<img width="850" height="550" alt="Screenshot 2026-06-20 202457" src="https://github.com/user-attachments/assets/effe4dc2-3190-4dc6-aae2-52c21dc995e2" />

<img width="850" height="550" alt="Screenshot 2026-06-20 202541" src="https://github.com/user-attachments/assets/2a4aa368-c3bd-44e8-9f5f-334b2340600b" />
<img width="850" height="550" alt="Screenshot 2026-06-20 202602" src="https://github.com/user-attachments/assets/8bb48b89-0514-441c-938d-75e76d5c654f" />



# Attendance Taker

Project:
https://attendancetaker-production.up.railway.app/

A QR-based attendance management system built using Node.js, Express.js, MongoDB Atlas, and EJS. The system allows professors to manage attendance efficiently through dynamic QR codes and automated Excel sheet updates.

---

## Features

### Authentication & Authorization

* Professor Registration and Login
* JWT-based Authentication
* Secure Cookie-Based Session Management
* Protected Routes using Middleware

### Register Management

* Create Subject Registers
* Upload Student Excel Sheets
* Manage Multiple Sections and Subjects

### QR-Based Attendance

* Generate Dynamic QR Codes
* Time-Limited QR Expiry to Reduce Proxy Attendance
* Mobile-Friendly Attendance Form
* Attendance Submission Validation

### Attendance Processing

* Automatic Attendance Marking
* Excel Sheet Updates Using XLSX
* Student Verification Against Uploaded Records

### Architecture

* MVC (Model-View-Controller) Architecture
* Service Layer for Business Logic
* Modular Route Handling
* Middleware-Based Authentication

### Deployment

* Deployed on Railway
* MongoDB Atlas Database Integration

---

## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* Cookie Parser

### File Handling

* Multer
* XLSX

### Frontend

* EJS
* HTML
* CSS
* JavaScript

### Deployment

* Railway

---

## Project Structure

```bash
AttendanceTaker/
│
├── controllers/
│   ├── attendanceController.js
│   ├── authController.js
│   ├── registerController.js
│   └── serviceController.js
│
├── models/
│   ├── professor.js
│   ├── register.js
│   └── qrcode.js
│
├── routes/
│   ├── attendanceRoutes.js
│   ├── authRoutes.js
│   ├── registerRoutes.js
│   └── serviceRoutes.js
│
├── services/
│   └── attendanceServices.js
│
├── middlewares/
│   └── auth.js
│
├── utils/
│   └── multer.js
│
├── public/
│   ├── css/
│   │   ├── landing.css
│   │   ├── login.css
│   │   ├── dashboard.css
│   │   ├── registers.css
│   │   ├── generate.css
│   │   ├── form.css
│   │   └── createRegister.css
│   │
│   └── images/
│
├── uploads/
│   └── attendance.xlsx
│
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   ├── registers.ejs
│   ├── createRegister.ejs
│   ├── generate.ejs
│   ├── form.ejs
│   └── success.ejs
│
├── .env
├── .gitignore
├── attendance.js
├── package.json
├── package-lock.json
└── README.md
```


## How It Works

### Professor Workflow

1. Register/Login
2. Create a Register
3. Upload Student Excel Sheet
4. Generate QR Code
5. Display QR to Students

### Student Workflow

1. Scan QR Code
2. Open Attendance Form
3. Enter Details
4. Submit Attendance
5. Attendance Updated in Excel Sheet

---

## Security Features

* JWT Authentication
* Secure Cookie-Based Sessions
* Protected Routes
* Time-Limited QR Codes
* Attendance Validation
* Professor-Specific Register Access


## Future Improvements

* Enhanced Proxy Prevention Mechanisms
* Attendance Analytics Dashboard
* Email Notifications
* Multi-Professor Institute Management
* Export Attendance Reports
* Improved UI/UX Design

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* Backend Development
* RESTful Routing
* Authentication & Authorization
* Session Management
* MongoDB Integration
* File Upload Handling
* Excel Processing
* MVC Architecture
* Deployment & Environment Configuration

---

## Author

Uduthala Ashwit

B.Tech Student | Full Stack Developer

Built as a practical project to automate classroom attendance using QR Codes and Excel-based record management

LinkedIn:
https://www.linkedin.com/in/uduthala-ashwit-6a2810374/
