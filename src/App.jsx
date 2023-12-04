import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/addBusiness" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;