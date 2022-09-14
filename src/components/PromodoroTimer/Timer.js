import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';

const blue = 'rgba(147, 197, 253)';
const green = '#4aec8c';

const Timer = () => {
    const percentage = 66;

  return (
    <div className='my-8'>
        <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: blue,
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: "transparent"
            })}
        />
        <div className='mt-6 flex justify-center'>
            <PlayButton className='from-blue-300'/>
            <PauseButton />
        </div>
        <div className='mt-1 flex justify-center'>
            <SettingsButton />
        </div>
    </div>
  )
}

export default Timer
