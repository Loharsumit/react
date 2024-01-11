import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link to='#' onClick={onClose}>Close</Link>
      <Link to='#'>Link 1</Link>
      <Link to='#'>Link 2</Link>
      <Link to='#'>Link 3</Link>
    </div>
  );
};

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="content">
        <div className="menuIcon" onClick={openSidebar}>&#9776; Open</div>
        <h2>Main Content</h2>
        <p>This is the main content area. Replace this with your actual content.</p>
      </div>
    </div>
  );
};

export default App;

