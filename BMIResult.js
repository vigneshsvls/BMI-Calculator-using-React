import React from 'react';

const BMIResult = ({ bmi }) => {
  let bmiClass = '';
  if (bmi < 18.5) {
    bmiClass = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiClass = 'Normal weight';
  } else if (bmi >= 24.9 && bmi < 29.9) {
    bmiClass = 'Overweight';
  } else {
    bmiClass = 'Obese';
  }

  return (
    <div>
      <h2>Your BMI: {bmi.toFixed(1)}</h2>
      <p>Classification: {bmiClass}</p>
    </div>
  );
};

export default BMIResult;
