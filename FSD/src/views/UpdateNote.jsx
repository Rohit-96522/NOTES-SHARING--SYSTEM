import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    description: '',
    status: 'Active',
    file: null
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetch(`http://localhost:5000/api/notes/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          title: data.title,
          subject: data.subject,
          description: data.description,
          status: data.status,
          file: null
        });
      })
      .catch(err => console.error("Failed to load note:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('title', formData.title);
    data.append('subject', formData.subject);
    data.append('description', formData.description);
    data.append('status', formData.status);
    if (formData.file) {
      data.append('file', formData.file);
    }

    try {
      const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'PUT',
        body: data,
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Note successfully updated! Redirecting...' });
        setTimeout(() => navigate('/notes'), 1500);
      } else {
        const errData = await response.json();
        setMessage({ type: 'error', text: `Failed to update: ${errData.message || 'Unknown error'}` });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Error updating note' });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="page-header">
        <h1>Update Note</h1>
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
            <label htmlFor="title">Note Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="form-control" 
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="form-control" 
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select 
              id="status" 
              name="status" 
              className="form-control" 
              value={formData.status}
              onChange={handleChange}
              style={{ padding: '0.75rem 1rem' }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              name="description" 
              className="form-control" 
              rows="4" 
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="file">Attach New File (Optional)</label>
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
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateNote;
