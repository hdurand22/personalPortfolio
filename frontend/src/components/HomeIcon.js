import React from "react";
import HomeIconFloatingBox1 from "./HomeIconFloatingBox1";
import HomeIconFloatingBox2 from "./HomeIconFloatingBox2";
import HomeIconFloatingBox3 from "./HomeIconFloatingBox3";
import HomeIconPCBackground from "./HomeIconPCBackground";
import HomeIconBackgroundCircle from "./HomeIconBackgroundCircle";
import HomeIconCircleOutline from "./HomeIconCircleOutline";
import HomeIconTextLine1 from "./HomeIconTextLine1";
import HomeIconTextLine2 from "./HomeIconTextLine2";
import HomeIconTextLine3 from "./HomeIconTextLine3";
import HomeIconTextLine4 from "./HomeIconTextLine4";
import HomeIconPCLogo from "./HomeIconPCLogo";
import { useSprings, animated, useSpring} from "react-spring";

function HomeIcon({ toggle }) {
    
    // Animations for boxes
    const floatingBoxes = [
        <HomeIconFloatingBox1 key="box1" />,
        <HomeIconFloatingBox2 key="box2" />,
        <HomeIconFloatingBox3 key="box3" />
    ]

    const boxSprings = useSprings(
        floatingBoxes.length,
        floatingBoxes.map((_, i) => {
            return {
                transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(-400px, 0px, 0px)`,
                opacity: toggle ? 1 : 0,
                delay: i * 100,
            }
        })
    );

    const animatedBoxes = boxSprings.map((animatedStyle, index) => (
        <animated.g
            key={index}
            style={animatedStyle}
        >
            {floatingBoxes[index]}
        </animated.g>
    ));

    // Animations for text lines
    const textLines = [
        <HomeIconTextLine1 key="line1" />,
        <HomeIconTextLine2 key="line2" />,
        <HomeIconTextLine3 key="line3" />,
        <HomeIconTextLine4 key="line4" />,
    ]

    const textLineSprings = useSprings(
        textLines.length,
        textLines.map((_, i) => {
            return {
                transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(-400px, 0px, 0px)`,
                opacity: toggle ? 1 : 0,
                delay: i * 100
            }
        })
    );

    const animatedTextLines = textLineSprings.map((animatedStyle, index) => (
        <animated.g
            key={index}
            style={animatedStyle}
        >
            {textLines[index]}
        </animated.g>
    ));

    // // Animating circles
    const circles = [
        <HomeIconBackgroundCircle key="circle1" />,
        <HomeIconCircleOutline key="circle2" d="M441.483 343.55a75.016 75.016 0 1175.016-75.015 75.016 75.016 0 01-75.016 75.016zm0-149.05a74.035 74.035 0 1074.035 74.035 74.035 74.035 0 00-74.035-74.035z" toggle={toggle} delay={500} />,
    ]

    const circleSprings = useSprings(
        circles.length,
        circles.map((_, i) => {
            return {
                transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(-400px, 0px, 0px)`,
                opacity: toggle ? 1 : 0,
                delay: i * 100
            }
        })
    );

    const animatedCircles = circleSprings.map((animatedStyle, index) => (
        <animated.g
        style={animatedStyle}    
        key={index}
        >
            {circles[index]}
        </animated.g>
    ));

    const iconLogoSpring = useSpring({
        transform: toggle ? `translate3d(0px, 0px, 0px)` : `translate3d(-400px, 0px, 0px)`,
        opacity: toggle ? 1 : 0,
    });

    const animatedIconLogo = <animated.g style={iconLogoSpring}><HomeIconPCLogo /></animated.g>
  
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1019.484"
            height="436.681"
            data-name="Layer 1"
            viewBox="0 0 1019.484 436.681"
        >
            <path
                fill="#ffb9b9"
                d="M223.77 243.614a9.75 9.75 0 10-19.407 1.282l-28.015 36.686a13.583 13.583 0 001.836 14.914l2.198 2.564 10.083-2.017 11.428-10.083-1.345-11.428 14.117-22.183-.018-.016a9.743 9.743 0 009.123-9.719z"
            ></path>
            <path
                fill="#ffb8b8"
                d="M30.041 422.968L25.468 405.984 88.8 380.265 95.549 405.331 30.041 422.968z"
            ></path>
            <path
                fill="#2f2e41"
                d="M14.744 431.732L0 376.97l.693-.187a22.075 22.075 0 0127.054 15.575v.002l9.005 33.447z"
            ></path>
            <path
                fill="#ffb8b8"
                d="M117.278 420.254L103.054 409.91 136.185 350.121 157.179 365.388 117.278 420.254z"
            ></path>
            <path
                fill="#2f2e41"
                d="M110.879 436.681l-45.866-33.355.422-.58a22.075 22.075 0 0130.834-4.87h.002l28.013 20.373zM238.192 336.704l-35.795-34.772a18.076 18.076 0 00-23.668-1.323l-67.586 75.084 6.05 9.411 64.533-43.694 43.694 57.138 41.678-20.838z"
            ></path>
            <path
                fill="#ffb9b9"
                d="M222.731 344.099l-26.216-2.017-18.986-4.603a9.753 9.753 0 10-1.85 12.656l-.003.014 11.428 4.705 49.072 16.806 6.05-4.706z"
            ></path>
            <path
                fill="#2f2e41"
                d="M285.92 416.699L271.131 426.11 253.653 426.11 172.315 395.86 53.332 417.371 49.971 391.826 158.871 344.099 254.326 375.693 285.92 416.699z"
            ></path>
            <circle cx="254.326" cy="227.132" r="26.217" fill="#ffb9b9"></circle>
            <path
                fill="#ccc"
                d="M322.16 331.804a150.631 150.631 0 01-7.388 46.591l-1.963 6.037-9.411 43.022-10.083 2.689-7.395-9.411-14.789-10.756-10.755-17.477-9.223-15.367-2.877-4.8-10.084-50.417-38.316-21.51-12.772-2.017 2.689-7.395 11.427-15.46 11.428-1.345 3.361-2.69 2.69 1.345 14.822 5.71 48.057-20.304 7.031 1.15 24.2 20.167a150.5 150.5 0 019.35 52.238z"
            ></path>
            <path
                opacity="0.1"
                style={{ isolation: "isolate" }}
                d="M314.825 325.949L289.281 342.754 251.153 377.131 248.276 372.332 240.209 331.999 242.226 331.999 263.065 293.683 314.825 325.949z"
            ></path>
            <path
                fill="#ccc"
                d="M263.065 289.649L242.226 327.965 230.126 341.41 219.371 344.099 248.276 375.693 289.281 338.721 314.825 321.915 263.065 289.649z"
            ></path>
            <path
                fill="#2f2e41"
                d="M233.935 207.64l-2.84 1.092a3.965 3.965 0 01-1.061-5.507l.046-.067-5.249-.246a39.637 39.637 0 0159.174-4.769c.239-.823 2.844.778 3.907 2.402.358-1.34 2.8 5.135 3.665 9.712.4-1.524 1.937.936.59 3.297.854-.125 1.24 2.06.579 3.276.934-.439.776 2.169-.237 3.911 1.333-.118-.113 27.331-20.113 25.331-1.393-6.397-1-6-2.64-14.226-.763-.81-1.599-1.548-2.433-2.284l-4.513-3.984c-5.247-4.632-10.02-10.348-17.01-12.08-4.804-1.189-7.842-1.458-5.224-6.87-2.365.986-4.574 2.454-6.96 3.37.031-.756.365-1.602.319-2.359z"
            ></path>
            <circle cx="267.434" cy="230.157" r="4.706" fill="#ffb9b9"></circle>
            {animatedBoxes}
            <path
                fill="#3f3d56"
                d="M963.277 0H323.894a17.598 17.598 0 00-17.598 17.598v356.253a17.599 17.599 0 0017.598 17.598h639.383a17.599 17.599 0 0017.599-17.598V17.598A17.599 17.599 0 00963.277 0z"
            ></path>
            <path fill="#fff" d="M329.89 31.101H957.281V385.014H329.89z"></path>
            <circle cx="643.049" cy="15.014" r="6.435" fill="#fff"></circle>
            <HomeIconPCBackground />
            {animatedCircles}
            {/* <IconBackgroundCircle />
            <IconCircleOutline d="M441.483 343.55a75.016 75.016 0 1175.016-75.015 75.016 75.016 0 01-75.016 75.016zm0-149.05a74.035 74.035 0 1074.035 74.035 74.035 74.035 0 00-74.035-74.035z" /> */}
            {animatedTextLines}
            {/* <IconPCLogo /> */}
            {animatedIconLogo}
            <path
                fill="#3f3d56"
                d="M998.491 378.58h-61.23v-4.412a.875.875 0 00-.874-.875h-20.993a.875.875 0 00-.874.875v4.412H901.4v-4.412a.875.875 0 00-.876-.875h-20.993a.875.875 0 00-.874.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875H736.08a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875H556.766a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875H485.04a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.874.875v4.412h-40.237a20.993 20.993 0 00-20.993 20.993v9.492a20.993 20.993 0 0020.993 20.993h698.014a20.993 20.993 0 0020.993-20.993v-9.492a20.993 20.993 0 00-20.993-20.993z"
            ></path>
        </svg>
  );
}

export default HomeIcon;