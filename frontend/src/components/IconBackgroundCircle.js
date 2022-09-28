import React, { useState, useEffect } from 'react';
import { animated } from 'react-spring';
import useAnimatedPath from '../hooks/useAnimatedPath';

const IconBackgroundCircle = ({ toggle, delay }) => {
  const animationProps = useAnimatedPath({ toggle, delay });

  return (
    <g>
        <animated.circle
          {...animationProps}
          stroke="#47f4ad"
          strokeWidth="10"
          cx="428.058" 
          cy="298.224" 
          r="60.307" 
          fill="#47f4ad"
        />
    </g>
  )
}

export default IconBackgroundCircle