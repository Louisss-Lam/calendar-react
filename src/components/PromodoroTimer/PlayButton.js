import React from 'react'

const PlayButton = (props) => {
  return (
    <button {...props}>
        <svg className='w-11' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill='rgba(156, 163, 175)'>
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
        </svg>
    </button>
  )
}

export default PlayButton