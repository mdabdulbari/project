import React from 'react';

import './styles.css'
import PictureContainer from './PictureContainer';

const StaffLabel = ({ staffDetails }) => {
    const { name, startTime, endTime, rating, role, imageLink } = staffDetails;
    return (
        <div className="staff-label">
            <div className="staff-label__picture-container">
                <PictureContainer startTime={startTime} endTime={endTime} imageLink={imageLink} />
            </div>
            <div className="staff-label__details">
                <div className="staff-label__name">
                    {name}<span className="staff-label__rating">{rating}</span>
                </div>
                <div className="staff-label__role">
                    {role}
                </div>
            </div>
        </div>
    );
}

export default StaffLabel;
