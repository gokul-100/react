import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormComponent({ addRecord }) {
  const [formData, setFormData] = useState({
    examName: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord(formData);
    setFormData({
      examName: '',
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correctAnswer: ''
    });
    navigate('/display'); // Navigate to display page after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label'>Enter Exam Name</label>
      <input type='text' name='examName' value={formData.examName} onChange={handleChange} className='form-control' />
      
      <label className='form-label'>Enter the question</label>
      <input type='text' name='question' value={formData.question} onChange={handleChange} className='form-control' />
      
      <div className='row'>
        <div className='col-sm-6'>
          <label className='form-label'>Option 1</label>
          <input type='text' name='option1' value={formData.option1} onChange={handleChange} className='form-control' />
        </div>
        <div className='col-sm-6'>
          <label className='form-label'>Option 2</label>
          <input type='text' name='option2' value={formData.option2} onChange={handleChange} className='form-control' />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6'>
          <label className='form-label'>Option 3</label>
          <input type='text' name='option3' value={formData.option3} onChange={handleChange} className='form-control' />
        </div>
        <div className='col-sm-6'>
          <label className='form-label'>Option 4</label>
          <input type='text' name='option4' value={formData.option4} onChange={handleChange} className='form-control' />
        </div>
      </div>

      <label className='form-label'>Correct Answer</label>
      <input type='text' name='correctAnswer' value={formData.correctAnswer} onChange={handleChange} className='form-control' />
      
      <button type='submit' className='btn btn-primary mt-2'>Submit</button>
    </form>
  );
}

export default FormComponent;
