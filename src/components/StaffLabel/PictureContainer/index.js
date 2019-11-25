import React from 'react';
import './styles.css';

const PictureContainer = ({ startTime, endTime, imageLink }) => {
    const duration = endTime - startTime;
    // 24 / 82 (82 is the circumference of the circle);
    const UNIT = 3.4166667;
    const strokePercentage = UNIT * duration;
    const startingPoint = -(startTime * UNIT);
    return (
        <div className='picture-container'>
            <svg width="100" height="100%" viewBox="0 0 42 42" className="donut">
                <circle className="donut-hole" cx="21" cy="21" r="12" fill="#fff"></circle>
                <circle className="donut-ring" cx="21" cy="21" r="13" fill="transparent" stroke="#acccfe" strokeWidth="2"></circle>

                <circle className="donut-segment" cx="21" cy="21" r="13"
                    fill="transparent" stroke="#fd0001" strokeWidth="2"
                    strokeDasharray={`${strokePercentage} ${82 - strokePercentage}`}
                    strokeDashoffset={startingPoint}
                ></circle>
                <defs>
                    <clipPath id="circleView">
                        <circle cx="21" cy="21" r="12" fill="#FFFFFF" />
                    </clipPath>
                </defs>
                <image
                    className='picture-container__img'
                    xlinkHref={imageLink}
                    clipPath="url(#circleView)"
                    preserveAspectRatio="xMidYMid slice" />
            </svg>
        </div >
    );
}

export default PictureContainer;