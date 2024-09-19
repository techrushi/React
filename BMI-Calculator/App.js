import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [height, setheight] = useState(180);
  const [Weight, setweight] = useState(70);

  function onweightchange(event){
    setweight(event.target.value)
    console.log(Weight)
  }

  function onheightchange(event){
    setheight(event.target.value)
    console.log(height)
  }

const output = useMemo(()=> {
const calculateheight = height / 100;

return (Weight/ (calculateheight*calculateheight)).toFixed(1)
},[Weight,height]);

  return (
    <main>
      <h1>Project 1: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {Weight}kg</p>
        <input className='input-slider' type='range' step="1" min="40" max="200"
          onChange={onweightchange}
        />
        <p className='slider-output'>Height: {height}cm</p>
        <input className='input-slider' type='range' onChange={onheightchange}
          min='140' max='220'
        />
      </div>
      <div className='output-section'>
        <p> Your BMI is </p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
