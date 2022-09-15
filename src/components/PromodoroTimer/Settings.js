import React from 'react';
import ReactSlider from 'react-slider';
import './slider.css';

const Settings = () => {
  return (
    <div className='mt-10'>
        <label className='block mb-1'>work minutes:</label>
        <ReactSlider 
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        />
        <label className='block mb-1 mt-4'>break minutes:</label>
        <ReactSlider 
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        />
    </div>
  )
}

export default Settings