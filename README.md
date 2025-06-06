
# 🏥 Doctor Appointment System – MERN Stack

A full-stack **Doctor Appointment Booking System** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This system allows patients to schedule appointments with doctors, while doctors manage their availability and appointments through a responsive dashboard.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- Secure login & registration for **patients** and **doctors**
- JWT-based authentication
- Role-based access control (admin/doctor/patient)

### 👨‍⚕️ Patient Features
- Browse list of available doctors
- Book appointments with preferred time slots
- View upcoming and past appointments
- Cancel or reschedule appointments
- Receive appointment status updates

### 🩺 Doctor Features
- Manage daily/weekly availability
- View booked appointments
- Accept, reject, or cancel appointments
- Dashboard for daily appointments and analytics

### 🛠️ Admin Features
- Manage all users (add/remove doctors or patients)
- View all appointments across the system
- Ban users or delete accounts

### 📅 Appointment Management
- Real-time appointment status updates
- Prevent double bookings via backend validation

---

## 🖥️ Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| **Frontend** | React.js, Axios, Context API/Redux, TailwindCSS/Bootstrap |
| **Backend**  | Node.js, Express.js         |
| **Database** | MongoDB, Mongoose           |
| **Auth**     | JSON Web Tokens (JWT), bcrypt |
| **Others**   |  dotenv
