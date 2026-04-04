import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import NoteList from './views/NoteList';
import UploadNote from './views/UploadNote';
import UpdateNote from './views/UpdateNote';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-brand">📚 NotesShare</div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>Dashboard</NavLink>
            <NavLink to="/notes" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>All Notes</NavLink>
            <NavLink to="/upload" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Upload</NavLink>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<NoteList />} />
            <Route path="/upload" element={<UploadNote />} />
            <Route path="/update/:id" element={<UpdateNote />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
