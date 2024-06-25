import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExamTable() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExams, setSelectedExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  useEffect(() => {
    // Load selected exams from localStorage on initial load
    const selectedExamsFromStorage = JSON.parse(localStorage.getItem('selectedExams')) || [];
    setSelectedExams(selectedExamsFromStorage);
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:8888/exams');
      setExams(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching exam data:', error);
      setLoading(false);
    }
  };

  const handleCheckboxChange = (examName, isChecked) => {
    let updatedSelectedExams;
    if (isChecked) {
      // Add exam name to selectedExams state and update localStorage
      updatedSelectedExams = [...selectedExams, examName];
    } else {
      // Remove exam name from selectedExams state and update localStorage
      updatedSelectedExams = selectedExams.filter(name => name !== examName);
    }
    // Update state and localStorage with updated selectedExams
    setSelectedExams(updatedSelectedExams);
    localStorage.setItem('selectedExams', JSON.stringify(updatedSelectedExams));
  };

  const isSelected = (examName) => {
    return selectedExams.includes(examName);
  };

  return (
    <div className="container mt-5">
      <h2>Exam List</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>Exam ID</th>
            <th>Exam Name</th>
            <th>Select</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="text-center">Loading...</td>
            </tr>
          ) : exams.length > 0 ? (
            exams.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.examId}</td>
                <td>{exam.examName}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(exam.examName, e.target.checked)}
                    checked={isSelected(exam.examName)}
                  />
                </td>
                <td>
                  <button className="btn btn-outline-success btn-sm">
                    Edit
                  </button>
                  {' '}
                  <button className="btn btn-outline-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No exams found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ExamTable;
