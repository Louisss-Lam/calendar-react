import React from 'react';

export default function Button({title, activeClass, _callback}) {
  return (
    <button onClick={_callback}>
        {title}
    </button>
  )
}
