import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NoteList() {
  // Mock Data since there is no backend yet
  const [notes] = useState([
    { _id: '1', title: 'Data Structures and Algorithms', subject: 'Computer Science', description: 'Complete notes for trees, graphs, and sorting.', status: 'Active', uploadedAt: '2026-04-01' },
    { _id: '2', title: 'Introduction to Mechanics', subject: 'Physics', description: 'Kinematics, dynamics, and Newton\\\'s laws.', status: 'Active', uploadedAt: '2026-04-03' },
    { _id: '3', title: 'Calculus III Limits', subject: 'Mathematics', description: 'Multivariable calculus notes and limit rules.', status: 'Inactive', uploadedAt: '2026-03-28' },
  ]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1>All Notes</h1>
          <p style={{ color: 'var(--text-muted)' }}>Browse all uploaded study materials.</p>
        </div>
        <Link to="/upload" className="btn btn-primary">+ Upload Note</Link>
      </div>

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>No notes found.</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="glass-card note-item">
              <span className={`badge ${note.status === 'Active' ? 'active' : 'inactive'}`}>
                {note.status}
              </span>
              <h3>{note.title}</h3>
              <p><strong>{note.subject}</strong></p>
              <p>{note.description}</p>
              <small style={{ color: 'var(--text-muted)' }}>Uploaded: {note.uploadedAt}</small>
              
              <div className="note-actions">
                <Link to={`/update/${note._id}`} className="btn btn-secondary">Edit</Link>
                <button className="btn btn-primary" onClick={() => alert('Download simulated!')}>Download</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
