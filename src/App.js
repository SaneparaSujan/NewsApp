import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} key="General" pageSize={5} country="us" category="General" />} />
          <Route path="/Business" element={<News apiKey={apiKey} key="Business" pageSize={5} country="us" category="Business" />} />
          <Route path="/Entertainment" element={<News apiKey={apiKey} key="Entertainment" pageSize={5} country="us" category="Entertainment" />} />
          <Route path="/Health" element={<News apiKey={apiKey} key="Health" pageSize={5} country="us" category="Health" />} />
          <Route path="/Science" element={<News apiKey={apiKey} key="Science" pageSize={5} country="us" category="Science" />} />
          <Route path="/Sports" element={<News apiKey={apiKey} key="Sports" pageSize={5} country="us" category="Sports" />} />
          <Route path="/Technalogy" element={<News apiKey={apiKey} key="Technalogy" pageSize={5} country="us" category="Technalogy" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
