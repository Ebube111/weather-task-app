import React from 'react';
import styles from './UpcomingDaysForecastItem.module.css';

const imgBaseUrl = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl, temperature2 }) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <span className="mb-2">{weekday}</span>
        <img className="mb-2" width="30" src={`${imgBaseUrl}img/weather/${imgUrl}.svg`} alt="" />
        <div className="d-flex flex-row">
            <span className="font-weght-bold mr-3">{temperature} °C</span>
            <span className="font-weght-lighter text-white-50">{temperature2} °C</span>
        </div>
    </li>
);

export default UpcomingDaysForecastItem;
