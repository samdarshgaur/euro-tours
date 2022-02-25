import { useState } from "react";

import classes from './Tour.module.css';

const Tour = ({ title, price, image, description }) => {
    const [showMoreDescription, setShowMoreDescription] = useState(false);

    const [notInterested, setNotInterested] = useState(false);

    const showMoreDescriptionHandler = () => {
        setShowMoreDescription(true);
    };

    const showLessDescriptionHandler = () => {
        setShowMoreDescription(false);
    };

    const notInterestedHandler = () => {
        setNotInterested(true);
    };

    return (
        <article className={notInterested ? classes.noTour : classes.tour}>
            <div className={classes.tourImg}>
                <img src={image} alt="tour" />
            </div>
            <div className={classes.tourContent}>
                <div className={classes.tourTitleAndPrice}>
                    <h3 className={classes.tourTitle}>
                        {title}
                    </h3>
                    <h3 className={classes.tourPrice}>
                        ${price}
                    </h3>
                </div>
                <p className={classes.tourDescription}>
                    {(description).substring(0, 200)}
                    {!showMoreDescription && <span>... </span>}
                    {!showMoreDescription && <button onClick={showMoreDescriptionHandler} className={classes.readMoreBtn}>Read More</button>}
                    {showMoreDescription && (description).substring(200) + ' '}
                    {showMoreDescription && <button onClick={showLessDescriptionHandler} className={classes.showLessBtn}>Show Less</button>}
                </p>

                <div className={classes.notInterested}>
                    <button onClick={notInterestedHandler} className={classes.notInterestedBtn}>Not Interested</button>
                </div>
            </div>
        </article>
    );
};

export default Tour;