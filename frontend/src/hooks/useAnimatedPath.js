import { useState } from 'react';
import { useSpring } from 'react-spring';

const useAnimatedPath = ({ toggle, delay }) => {
    const [length, setLength] = useState(null); // For measuring length of path and updating it as it gets animated
    const animatedStyle = useSpring({
        strokeDashoffset: toggle ? 0 : length,
        strokeDasharray: length,
        delay: delay ? delay : 0,
        config: { tension: 4, friction: 0.5, clamp: true }
    });

    return {
        style: animatedStyle,
        ref: (ref) => {
            // ref is null on component unmount
            if (ref) {
                setLength(ref.getTotalLength());
            }
        }
    };
}

export default useAnimatedPath