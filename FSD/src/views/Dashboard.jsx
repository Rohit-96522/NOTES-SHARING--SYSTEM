import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Welcome to NotesShare</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage and explore academic notes easily.</p>
        </div>
        <Link to="/upload" className="btn btn-primary">+ New Note</Link>
      </div>

      <div className="dashboard-grid">
        <div className="glass-card stat-card">
          <div className="stat-value">124</div>
          <div className="stat-label">Total Notes Available</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-value">32</div>
          <div className="stat-label">Subjects Covered</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-value">8</div>
          <div className="stat-label">Recent Uploads</div>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '2rem' }}>
        <h3>Quick Actions</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Navigate through your platform via quick shortcuts.</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/notes" className="btn btn-primary">Browse Notes</Link>
          <Link to="/upload" className="btn btn-secondary">Share Note</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
