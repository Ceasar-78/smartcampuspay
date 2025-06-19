import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QRScanner from './components/QRScanner';
import History from './components/History';

function App() {
  return (
    <Router>
      <div>
        <h1>SmartCampusPay</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/scan">Scan QR</Link> | <Link to="/history">History</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to SmartCampusPay</div>} />
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;