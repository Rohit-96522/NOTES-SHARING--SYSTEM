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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.subject || !formData.file) {
      alert('Please fill out all required fields.');
      return;
    }
    // Simulate backend upload
    console.log('Uploading payload:', formData);
    alert('Note successfully uploaded! (Simulated)');
    navigate('/notes');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="page-header">
        <h1>Upload New Note</h1>
      </div>

      <div className="glass-card">
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
