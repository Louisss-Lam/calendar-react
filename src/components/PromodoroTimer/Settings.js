import React from 'react';
import ReactSlider from 'react-slider';

const Settings = () => {
  return (
    <div className='mt-10'>
        <label className='block'>work minutes:</label>
        <ReactSlider 
            className='h-7 border-4 border-blue-300 rounded-3xl'
            thumbClassName='bg-red-400'
            trackClassName={'track'}
            value={45}
            min={1}
            max={120}
        />
        <label className='block'>break minutes:</label>
    </div>
  )
}

export default Settings