import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadNote() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    description: '',
    file: null
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.subject || !formData.file) {
      setMessage({ type: 'error', text: 'Please fill out all required fields.' });
      return;
    }
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('subject', formData.subject);
    data.append('description', formData.description);
    data.append('file', formData.file);

    try {
      const response = await fetch('http://localhost:5000/api/notes/upload', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Note successfully uploaded! Redirecting...' });
        setTimeout(() => navigate('/notes'), 1500);
      } else {
        const errData = await response.json();
        setMessage({ type: 'error', text: `Failed to upload: ${errData.message || 'Unknown error'}` });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Error uploading file' });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="page-header">
        <h1>Upload New Note</h1>
      </div>

      <div className="glass-card">
        {message.text && (
          <div style={{
            padding: '1rem', 
            marginBottom: '1.5rem', 
            borderRadius: '8px', 
            backgroundColor: message.type === 'success' ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)', 
            color: message.type === 'success' ? '#fff' : '#ff6b6b',
            border: `1px solid ${message.type === 'success' ? 'rgba(40, 167, 69, 0.5)' : 'rgba(220, 53, 69, 0.5)'}`
          }}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Note Title *</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="form-control" 
              placeholder="e.g., Introduction to React" 
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="form-control" 
              placeholder="e.g., Web Development" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              name="description" 
              className="form-control" 
              rows="4" 
              placeholder="Briefly describe the contents of this note..."
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file">Attach File (PDF, DOCX) *</label>
            <input 
              type="file" 
              id="file" 
              name="file" 
              className="form-control" 
              onChange={handleFileChange}
              style={{ background: 'transparent', padding: '0.5rem 0' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Upload to Server</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadNote;
