import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect } from 'react';
import SettingsContext from './SettingsContext';

const blue = 'rgba(147, 197, 253)';
const green = '#4aec8c';

const Timer = () => {
    const percentage = 66;
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        console.log('hi');
    },[]);

  return (
    <div className='my-8'>
        <div className='w-48 ml-3'>
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
        </div>      
        <div className='mt-5 flex justify-center'>
            {isPaused ? <PlayButton /> : <PauseButton /> }
            <SettingsButton onClick={() => {settingsInfo.setShowSettings(true)}}/>
        </div>
    </div>
  )
}

export default Timer
