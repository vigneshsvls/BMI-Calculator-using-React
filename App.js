import React, { useState } from 'react';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';
import './App.css';

function App() {
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = (result) => {
    setBMI(result);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <BMIForm onCalculate={handleCalculateBMI} />
      {bmi !== null && <BMIResult bmi={bmi} />}
    </div>
  );
}

export default App;

