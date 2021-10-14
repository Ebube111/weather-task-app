import React from 'react';

import locationIcon from './assets/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, imgUrl, date, location, temperature, weatherIcon, weatherDescription }) => (
    <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
        <div>
            <img width="150" height="100" className="mb-5" src={weatherIcon} alt="" />
        </div>
        <div className="mb-5">
            <h3 className={styles.temperature}>
                {temperature}
                <span className={styles.temp}> °C</span>
            </h3>
            <div className="">
                <h5 className="ml-4 pr-3 text-white-50">{weatherDescription}</h5>
            </div>
        </div>
        <div className={`${styles.day_date} justify-content-center mt-5 `}>
            <span className="mr-2 ml-1 text-white-50">{weekday}</span>
            <span className="mb-0 text-white-50">{date}</span>
            <div className="d-flex ml-5 mt-1">
                <p className=" text-white-50 mb-1">
                    <img width="10" height="15" src={locationIcon} className="mr-1" alt="location icon" />
                    <span>{location}</span>
                </p>
            </div>
        </div>
    </div>
);

export default CurrentDay;
