import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stats, setStats] = useState({ total: 0, subjects: 0, recent: 0 });

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then(res => res.json())
      .then(data => {
        // Compute stats from the notes array
        const uniqueSubjects = new Set(data.map(note => note.subject)).size;
        
        // Define "recent" as added within the last 7 days
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentCount = data.filter(note => {
          const dateStr = note.createdAt || note.uploadedAt;
          if (!dateStr) return false;
          return new Date(dateStr) > sevenDaysAgo;
        }).length;

        setStats({
          total: data.length,
          subjects: uniqueSubjects,
          recent: recentCount
        });
      })
      .catch(err => console.error("Failed to load notes for stats:", err));
  }, []);
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
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Notes Available</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-value">{stats.subjects}</div>
          <div className="stat-label">Subjects Covered</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-value">{stats.recent}</div>
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
