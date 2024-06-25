// src/components/DisplayPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DisplayPage() {
  const [records, setRecords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8888/records')
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % records.length);
  };

  return (
    <div className="container mt-5">
      {records.length > 0 ? (
        <div>
          <h2>Current Record</h2>
          <p><strong>Exam Name:</strong> {records[currentIndex].examName}</p>
          <p><strong>Question:</strong> {records[currentIndex].question}</p>
          <p><strong>Option 1:</strong> {records[currentIndex].option1}</p>
          <p><strong>Option 2:</strong> {records[currentIndex].option2}</p>
          <p><strong>Option 3:</strong> {records[currentIndex].option3}</p>
          <p><strong>Option 4:</strong> {records[currentIndex].option4}</p>
          <p><strong>Correct Answer:</strong> {records[currentIndex].correctAnswer}</p>
          <button className="btn btn-secondary mt-2" onClick={handleNext}>Next</button>
        </div>
      ) : (
        <p>No records available</p>
      )}
    </div>
  );
}

export default DisplayPage;
