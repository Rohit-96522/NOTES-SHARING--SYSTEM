import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    description: '',
    status: 'Active'
  });

  // Mock fetching existing logic
  useEffect(() => {
    // In a real app we would: fetch(/api/notes/${id})
    setFormData({
      title: 'Existing Note ' + id,
      subject: 'Computer Science',
      description: 'This is mock data loaded into the form.',
      status: 'Active'
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Update payload:', formData);
    alert('Note successfully updated! (Simulated)');
    navigate('/notes');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="page-header">
        <h1>Update Note</h1>
      </div>

      <div className="glass-card">
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
