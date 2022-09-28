import React from 'react';
import { animated, useSpring } from 'react-spring';
import useAnimatedPath from '../hooks/useAnimatedPath';

const FloatingBox1 = ({ toggle, delay }) => {
  const animationProps = useAnimatedPath({ toggle, delay });
  const animationFillStyle = useSpring({
    d: "M137.514 351.376H159.12400000000002V372.986H137.514z",
    transform:"rotate(-86.19 -20.61 294.586)",
    isolation: "isolate",
    delay: 250,
    zIndex: -2
  })
  
    return (
      <g>
        <animated.path
          // {...animationProps}
          fill="#ccc"
          d="M34.086 130.472l26.182 1.744-1.743 26.182-26.183-1.743zm24.968 2.806l-23.906-1.592-1.592 23.906 23.906 1.592z"
          stroke="#DBD7D1"
          strokeWidth="1"
          // delay={delay + 100}
        ></animated.path>
        <animated.path
          // {...animationProps}
          // {...animationFillStyle}
          d="M137.514 351.376H159.12400000000002V372.986H137.514z"
          stroke="#DBD7D1"
          strokeWidth="1"
          transform="rotate(-86.19 -20.61 294.586)"
          fill="#E6E6E6"
          isolation= "isolate"
        ></animated.path>
      </g>
  )
}

export default FloatingBox1