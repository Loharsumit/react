import React, { useState } from 'react';
import './App.css'; // You can create an App.css file for styling

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <a href="#" onClick={onClose}>Close</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
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

