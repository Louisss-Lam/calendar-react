import React from 'react';
import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import { useContext } from 'react';
import BackButton from './BackButton';

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className='mt-10'>
        <label className='block mb-1'>work: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
        />
        <label className='block mb-1 mt-4'>break: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider 
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={60}
        />
        <div className='mt-5 flex justify-center'>
          <BackButton onClick={() => {settingsInfo.setShowSettings(false)}} />
        </div>
        
    </div>
  )
}

export default Settings