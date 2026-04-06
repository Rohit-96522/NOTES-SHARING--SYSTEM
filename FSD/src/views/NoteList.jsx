import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then(res => res.json())
      .then(data => {
        setNotes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch notes:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
        setNotes(notes.filter(note => note._id !== id));
      } catch (err) {
        console.error("Failed to delete note:", err);
      }
    }
  };

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
        {loading ? (
          <p style={{ color: 'var(--text-muted)' }}>Loading notes...</p>
        ) : notes.length === 0 ? (
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
              <small style={{ color: 'var(--text-muted)' }}>Uploaded: {new Date(note.createdAt || note.uploadedAt).toLocaleDateString()}</small>
              
              <div className="note-actions">
                <Link to={`/update/${note._id}`} className="btn btn-secondary">Edit</Link>
                {note.fileUrl && (
                  <a href={`http://localhost:5000${note.fileUrl}`} target="_blank" rel="noreferrer" className="btn btn-primary" download>Download</a>
                )}
                <button onClick={() => handleDelete(note._id)} className="btn btn-secondary" style={{ background: '#ff4d4f', borderColor: '#ff4d4f', color: '#fff' }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
