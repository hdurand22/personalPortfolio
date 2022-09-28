import React from 'react';
import { animated } from 'react-spring';
import useAnimatedPath from '../hooks/useAnimatedPath';

const IconCircleOutline = ({ toggle, d, delay }) => {
  const animationProps = useAnimatedPath({ toggle, delay });
  
  return (
    <g>      
        <animated.path
            {...animationProps}
            stroke="#000"
            strokeWidth="1"
            // fill="#3f3d56"
            d={d}
        ></animated.path>
    </g>
  )
}

export default IconCircleOutline