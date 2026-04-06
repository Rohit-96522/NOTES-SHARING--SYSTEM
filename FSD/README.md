# 📚 NotesShare – MERN Stack Academic Platform

![React](https://img.shields.io/badge/React-19.x-blue?logo=react) ![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=nodedotjs) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-success?logo=mongodb) ![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)

NotesShare is a modern, full-stack web application developed using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It follows the **MVC (Model-View-Controller)** architecture and is designed with a very sophisticated glassmorphic UI. The application empowers students to upload, view, edit, download, and delete academic notes effortlessly.

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, and Delete notes.
- **File Uploads**: Supports attachments (PDF, DOCX, DOC, PPT, Images) directly linked to notes using MongoDB and local server storage via `multer`.
- **Sleek UI/UX**: Designed with beautiful glassmorphism components, custom inline notifications, and modern responsive grids.
- **Dynamic Dashboard**: Computes aggregate statistics instantly (Total Notes, Subjects Covered, Recent Uploads) based on server data.
- **RESTful API**: Completely decoupled backend with well-defined JSON endpoints.

## 🛠️ Tech Stack

### Frontend (Client)
- React.js (via Vite)
- React Router DOM
- Custom CSS Variables & Glassmorphism Design
- Fetch API for Backend communication

### Backend (Server)
- Node.js & Express.js
- MongoDB & Mongoose
- Multer (File buffering and saving)
- CORS & Express JSON Middleware

## 📂 Project Structure

```text
NotesShare/
├── backend/                  # Express.js Server
│   ├── config/               # Database config (db.js)
│   ├── controllers/          # API Handlers (noteController.js)
│   ├── middleware/           # Upload processing (uploadMiddleware.js)
│   ├── models/               # Mongoose Schemas (Note.js)
│   ├── routes/               # API Router (noteRoutes.js)
│   ├── uploads/              # Local file storage
│   ├── server.js             # Server Entry point
│   └── package.json          # Backend Dependencies
├── src/                      # React Frontend (Vite)
│   ├── views/                # React Pages (Dashboard, NoteList, UploadNote, UpdateNote)
│   ├── App.jsx               # Main React Component & Routing
│   ├── main.jsx              # React DOM Entry
│   └── App.css / index.css   # Global Styles & Theming
├── package.json              # Frontend Dependencies
└── vite.config.js            # Vite configuration
```

## 🔌 API Reference

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| `GET`  | `/api/notes`                | Fetch all notes                      |
| `POST` | `/api/notes/upload`         | Upload a new note (with file attachments) |
| `GET`  | `/api/notes/:id`            | Fetch a specific note by its ID      |
| `PUT`  | `/api/notes/:id`            | Update an existing note (and file)   |
| `PATCH`| `/api/notes/:id/status`     | Toggle note status (Active/Inactive) |
| `DELETE`|`/api/notes/:id`            | Permanently delete a note             |

## 🚀 Getting Started

### Prerequisites
- Node.js installed locally
- MongoDB running locally (default: `mongodb://127.0.0.1:27017/notesDB`)

### 1. Backend Setup

Open a terminal and navigate to the backend folder:

```bash
cd backend
npm install
npm start
```
*The server will run on `http://localhost:5000`.*

### 2. Frontend Setup

Open a new terminal and navigate to the project root:

```bash
npm install
npm run dev
```
*The client will run on `http://localhost:5173` (Vite).*

## 💡 Future Enhancements
- **User Authentication**: Implement JWT-based sessions.
- **Search and Filtering**: Find notes instantly by Subject or Title.
- **Cloud Storage**: Use AWS S3 or Cloudinary for file uploads rather than a local `./uploads/` directory.
