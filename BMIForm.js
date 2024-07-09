import React, { useState } from 'react';

const BMIForm = ({ onCalculate }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      onCalculate(parseFloat(weight) / Math.pow(parseFloat(height), 2));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Height (m):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} step="0.01" required />
      </label>
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} step="0.01" required />
      </label>
      <button type="submit">Calculate BMI</button>
    </form>
  );
};

export default BMIForm;
