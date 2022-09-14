import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = '#f54e4e';
const green = '#4aec8c';

const Timer = () => {
    const percentage = 66;

  return (
    <div>
        <CircularProgressbar value={percentage} text={`${percentage}%`}/>;
    </div>
  )
}

export default Timer
