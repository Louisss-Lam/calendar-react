import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function CountdownAnimation({key = 1, timer = 20, animate = true, children}) {
  return (
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={ timer * 60 }
        colors={['#fef6b', 0.33]}
        strokeWidth={6}
        trailColor="#151932"
        onComplete={ () => {
            // stopAnimate()
        }}
    >
        {/* {children} */}
    </CountdownCircleTimer>
  )
}
