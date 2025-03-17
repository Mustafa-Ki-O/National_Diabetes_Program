import React from 'react';

const Circle = ({ w, color1, color2, top,duration, right, translateX, translateY, degree, className }) => {
    
    return (
        <>
            <style>
                {`
                @keyframes animate-${className} {
                    0% {
                        transform: translate(${translateX}px, ${translateY}px);
                    }
                    25% {
                        transform: translate(${translateX - 3}px, ${translateY - 2}px);
                    }
                    50% {
                        transform: translate(${translateX}px, ${translateY}px);
                    }
                    75% {
                        transform: translate(${translateX + 4}px, ${translateY - 3}px);
                    }
                    100% {
                        transform: translate(${translateX}px, ${translateY}px);
                    }
                }

                .circle-${className} {
                    border-radius: 50%;
                    background: linear-gradient(${degree}, ${color1}, ${color2});
                    filter:drop-shadow(10px 10px 8px #12A2B240);
                    width: ${w}rem;
                    height: ${w}rem;
                    position: absolute;
                    top: ${top};
                    right: ${right};
                    z-index:0;
                    animation: animate-${className} ${duration} ease-in-out infinite backwards;
                }
                `}
            </style>
            <div className={`circle-${className}`}></div>
        </>
    );
};

export default Circle;