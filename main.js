import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormComponent from './inputData';
import DisplayPage from './displayPage';

function AppMain() {
  const [records, setRecords] = useState([]);

  const addRecord = (formData) => {
    setRecords((prevRecords) => [...prevRecords, formData]);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FormComponent addRecord={addRecord} />} />
        <Route path="/display" element={<DisplayPage records={records} />} />
      </Routes>
    </Router>
  );
}

export default AppMain;
