import './App.css';
import './index.css';
import React, { useState } from 'react';

function App() {
  // State
  const [weight, setWeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    // Prevent submitting to the server
    event.preventDefault();

    // Convert input values to numbers
    const weightNum = parseFloat(weight);
    const heightFtNum = parseFloat(heightFt);
    const heightInNum = parseFloat(heightIn);

    if (weightNum === 0 || (heightFtNum === 0 && heightInNum === 0)) {
      alert('Enter valid weight and height');
    } else {
      // Convert height to meters
      const heightInMeters = (heightFtNum * 0.3048) + (heightInNum * 0.0254);
      const bmiValue = weightNum / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      // Logic for message
      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You are a healthy weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are overweight');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='app'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input 
              type='number' 
              value={weight} 
              onChange={(event) => setWeight(event.target.value)} 
            />
          </div>

          <div className='inns'>
            <label>Height (ft)</label>
            <input 
              type='number' 
              value={heightFt} 
              onChange={(event) => setHeightFt(event.target.value)} 
            />
          </div>

          <div className='inns'>
            <label>Height (in)</label>
            <input 
              type='number' 
              value={heightIn} 
              onChange={(event) => setHeightIn(event.target.value)} 
            />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
