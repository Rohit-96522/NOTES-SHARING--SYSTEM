📚 Notes Sharing System – MERN MVC Project
📌 Project Title
Notes Sharing System using MERN Stack (MVC Architecture)
________________________________________
📖 Project Description
The Notes Sharing System is a full-stack web application developed using the MERN Stack (MongoDB, Express.js,
React.js, Node.js) following the MVC (Model–View–Controller) architecture.
This system allows students to upload, view, update, download, and delete notes efficiently. It provides 
structured backend APIs and supports file uploads using middleware. The application demonstrates complete CRUD 
operations using REST APIs including POST, GET, PUT, PATCH, and DELETE methods.

________________________________________
🎯 Objectives
•	To implement MVC architecture in a full-stack web application
•	To develop a RESTful API using Express.js
•	To manage data using MongoDB
•	To handle file uploads using middleware
•	To demonstrate CRUD operations
•	To create a simple and functional React frontend
________________________________________
🧰 Technologies Used
Frontend (View)
•	React.js
•	HTML5
•	CSS3
•	JavaScript
•	Axios (API calls)
Backend (Controller)
•	Node.js
•	Express.js
Database (Model)
•	MongoDB
•	Mongoose
Middleware
•	Multer (File Upload Handling)
•	CORS
•	Express JSON Parser
Development Tools
•	Visual Studio Code
•	Postman (API Testing)
•	MongoDB Compass
•	Git & GitHub
________________________________________
🏗️ Architecture Used
This project follows the MVC (Model–View–Controller) Architecture.
Model
Defines database schemas using MongoDB and Mongoose.
Example:
•	Note Schema
View
React frontend that displays user interface components.
Examples:
•	Upload Note Form
•	Notes List
•	Update Note Form
Controller
Handles application logic and API functionality.
Examples:
•	Upload note
•	Update note
•	Delete note
•	Fetch notes
________________________________________
📂 Project Folder Structure
Notes-Sharing-System/

client/
│
├── src/
│   ├── components/
│   │   ├── UploadNote.js
│   │   ├── NoteList.js
│   │   └── UpdateNote.js
│   │
│   ├── pages/
│   │   └── Dashboard.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│

server/
│
├── config/
│   └── db.js
│
├── models/
│   └── Note.js
│
├── controllers/
│   └── noteController.js
│
├── routes/
│   └── noteRoutes.js
│
├── middleware/
│   └── uploadMiddleware.js
│
├── uploads/
│
├── server.js
│
└── package.json
________________________________________
🗄️ Database Design

        Note Collection Fields
Field Name     	Data Type	Description
title	        String	    Title of the note
subject	        String	    Subject name
description	    String	    Note description
fileUrl	        String	    Uploaded file path
status	        String	    Active/Inactive
uploadedAt	    Date	    Upload timestamp
________________________________________

🔌 REST API Endpoints

POST API
    Upload Note
POST /api/notes/upload
Purpose:
Uploads a new note file to the server.
________________________________________
GET APIs
Get All Notes
GET /api/notes
Returns all uploaded notes.
________________________________________
Get Note by ID
GET /api/notes/:id
Returns a specific note.
________________________________________
PUT API
Update Note
PUT /api/notes/:id
Updates all fields of an existing note.
________________________________________
PATCH API
Update Note Status
PATCH /api/notes/:id/status
Updates only the note status.
________________________________________
DELETE API
Delete Note
DELETE /api/notes/:id
Removes a note from the system.
________________________________________
📤 File Upload Feature
The system uses Multer middleware to handle file uploads.
Supported File Types:
•	PDF
•	DOC
•	DOCX
•	PPT
•	Images
Uploaded files are stored in:
server/uploads/
________________________________________
🎨 User Interface Features
The UI is designed to be minimal and functional.
Main Pages
1.	Upload Note Page
2.	Notes List Page
3.	Update Note Page
4.	Dashboard
________________________________________
⚙️ Installation and Setup
Follow these steps to run the project locally.
________________________________________
Step 1 — Clone Repository
git clone https://github.com/your-username/notes-sharing-system.git
________________________________________
Step 2 — Install Backend Dependencies
cd server
npm install
________________________________________
Step 3 — Install Frontend Dependencies
cd client
npm install
________________________________________
Step 4 — Start MongoDB
Make sure MongoDB is running locally.
Default URL:
mongodb://127.0.0.1:27017/notesDB
________________________________________
Step 5 — Run Backend Server
cd server
npm start
Server runs on:
http://localhost:5000
________________________________________
Step 6 — Run Frontend
cd client
npm start
Frontend runs on:
http://localhost:3000
________________________________________
🧪 API Testing
All APIs were tested using:
•	Postman
Test Cases:
•	Upload note
•	Get notes
•	Update note
•	Delete note
•	Update status
________________________________________
🔐 Optional Future Enhancements
•	User Authentication (JWT)
•	Role-based Access (Student/Admin)
•	File Preview System
•	Search Notes Feature
•	Download Counter
•	Cloud Storage Integration
•	Pagination Support
________________________________________
📊 Project Advantages
•	Implements full CRUD operations
•	Uses REST API standards
•	Follows MVC architecture
•	Supports file uploads
•	Simple UI and strong backend
•	Suitable for academic FSD projects
________________________________________
⚠️ Limitations
•	No authentication (basic version)
•	Local file storage only
•	Minimal UI d📚 Notes Sharing System – MERN MVC Project
📌 Project Title
Notes Sharing System using MERN Stack (MVC Architecture)
________________________________________
📖 Project Description
The Notes Sharing System is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, Node.js) following the MVC (Model–View–Controller) architecture.
This system allows students to upload, view, update, download, and delete notes efficiently. It provides structured backend APIs and supports file uploads using middleware. The application demonstrates complete CRUD operations using REST APIs including POST, GET, PUT, PATCH, and DELETE methods.
The project focuses on building a minimal user interface with a medium-level backend suitable for academic full-stack development projects.
________________________________________
🎯 Objectives
•	To implement MVC architecture in a full-stack web application
•	To develop a RESTful API using Express.js
•	To manage data using MongoDB
•	To handle file uploads using middleware
•	To demonstrate CRUD operations
•	To create a simple and functional React frontend
________________________________________
🧰 Technologies Used
Frontend (View)
•	React.js
•	HTML5
•	CSS3
•	JavaScript
•	Axios (API calls)
Backend (Controller)
•	Node.js
•	Express.js
Database (Model)
•	MongoDB
•	Mongoose
Middleware
•	Multer (File Upload Handling)
•	CORS
•	Express JSON Parser
Development Tools
•	Visual Studio Code
•	Postman (API Testing)
•	MongoDB Compass
•	Git & GitHub
________________________________________
🏗️ Architecture Used
This project follows the MVC (Model–View–Controller) Architecture.
Model
Defines database schemas using MongoDB and Mongoose.
Example:
•	Note Schema
View
React frontend that displays user interface components.
Examples:
•	Upload Note Form
•	Notes List
•	Update Note Form
Controller
Handles application logic and API functionality.
Examples:
•	Upload note
•	Update note
•	Delete note
•	Fetch notes
________________________________________
📂 Project Folder Structure
Notes-Sharing-System/

client/
│
├── src/
│   ├── components/
│   │   ├── UploadNote.js
│   │   ├── NoteList.js
│   │   └── UpdateNote.js
│   │
│   ├── pages/
│   │   └── Dashboard.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js
│

server/
│
├── config/
│   └── db.js
│
├── models/
│   └── Note.js
│
├── controllers/
│   └── noteController.js
│
├── routes/
│   └── noteRoutes.js
│
├── middleware/
│   └── uploadMiddleware.js
│
├── uploads/
│
├── server.js
│
└── package.json
________________________________________
🗄️ Database Design
Note Collection Fields
Field Name	Data Type	Description
title	String	Title of the note
subject	String	Subject name
description	String	Note description
fileUrl	String	Uploaded file path
status	String	Active/Inactive
uploadedAt	Date	Upload timestamp
________________________________________
🔌 REST API Endpoints
POST API
Upload Note
POST /api/notes/upload
Purpose:
Uploads a new note file to the server.
________________________________________
GET APIs
Get All Notes
GET /api/notes
Returns all uploaded notes.
________________________________________
Get Note by ID
GET /api/notes/:id
Returns a specific note.
________________________________________
PUT API
Update Note
PUT /api/notes/:id
Updates all fields of an existing note.
________________________________________
PATCH API
Update Note Status
PATCH /api/notes/:id/status
Updates only the note status.
________________________________________
DELETE API
Delete Note
DELETE /api/notes/:id
Removes a note from the system.
________________________________________
📤 File Upload Feature
The system uses Multer middleware to handle file uploads.
Supported File Types:
•	PDF
•	DOC
•	DOCX
•	PPT
•	Images
Uploaded files are stored in:
server/uploads/
________________________________________
🎨 User Interface Features
The UI is designed to be minimal and functional.
Main Pages
1.	Upload Note Page
2.	Notes List Page
3.	Update Note Page
4.	Dashboard
________________________________________
⚙️ Installation and Setup
Follow these steps to run the project locally.
________________________________________
Step 1 — Clone Repository
git clone https://github.com/your-username/notes-sharing-system.git
________________________________________
Step 2 — Install Backend Dependencies
cd server
npm install
________________________________________
Step 3 — Install Frontend Dependencies
cd client
npm install
________________________________________
Step 4 — Start MongoDB
Make sure MongoDB is running locally.
Default URL:
mongodb://127.0.0.1:27017/notesDB
________________________________________
Step 5 — Run Backend Server
cd server
npm start
Server runs on:
http://localhost:5000
________________________________________
Step 6 — Run Frontend
cd client
npm start
Frontend runs on:
http://localhost:3000
________________________________________
🧪 API Testing
All APIs were tested using:
•	Postman
Test Cases:
•	Upload note
•	Get notes
•	Update note
•	Delete note
•	Update status
________________________________________
🔐 Optional Future Enhancements
•	User Authentication (JWT)
•	Role-based Access (Student/Admin)
•	File Preview System
•	Search Notes Feature
•	Download Counter
•	Cloud Storage Integration
•	Pagination Support
________________________________________
📊 Project Advantages
•	Implements full CRUD operations
•	Uses REST API standards
•	Follows MVC architecture
•	Supports file uploads
•	Simple UI and strong backend
•	Suitable for academic FSD projects
________________________________________
⚠️ Limitations
•	No authentication (basic version)
•	Local file storage only
•	Minimal UI design
•	No cloud storage integration
________________________________________
🎓 Learning Outcomes
Through this project, the following skills are demonstrated:
•	MERN Stack Development
•	REST API Design
•	MVC Architecture Implementation
•	MongoDB Database Handling
•	File Upload Handling
•	Frontend–Backend Integration
________________________________________
📌 Conclusion
The Notes Sharing System successfully demonstrates the implementation of a full-stack MERN application using MVC architecture. It includes essential backend functionalities such as file uploads, REST APIs, and CRUD operations, along with a simple frontend interface.
This project provides practical exposure to real-world web development and is suitable as a medium-level full-stack development project.
________________________________________
👨‍💻 Author
Project Developed By:
Student – Full Stack Development (MERN)
________________________________________
📄 License
This project is developed for educational purposes.

esign
•	No cloud storage integration
________________________________________
🎓 Learning Outcomes
Through this project, the following skills are demonstrated:
•	MERN Stack Development
•	REST API Design
•	MVC Architecture Implementation
•	MongoDB Database Handling
•	File Upload Handling
•	Frontend–Backend Integration
________________________________________
📌 Conclusion
The Notes Sharing System successfully demonstrates the implementation of a full-stack MERN application using MVC architecture. It includes essential backend functionalities such as file uploads, REST APIs, and CRUD operations, along with a simple frontend interface.
This project provides practical exposure to real-world web development and is suitable as a medium-level full-stack development project.
________________________________________
👨‍💻 Author
Project Developed By:
Student – Full Stack Development (MERN)
________________________________________
📄 License
This project is developed for educational purposes.

