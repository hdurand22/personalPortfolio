import React from 'react'
import useAnimatedPath from '../hooks/useAnimatedPath';
import { animated } from 'react-spring';

const PCBackground = ({ toggle }) => {
    const animationProps = useAnimatedPath({ 
        toggle,
        delay: 500
    });
  
    return (
        <g>
            <path
                fill="#f2f2f2"
                style={{ isolation: "isolate" }}
                d="M777.858 385.015L329.89 385.015 329.89 31.102 777.858 385.015z"
            ></path>
        </g>
    )
}

export default PCBackground