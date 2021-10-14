import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';
import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) => (
    <ul className={`${styles.weekList} `}>
        {days.map(day => (
            <div className={styles.week}>
                <UpcomingDaysForecastItem {...day} key={day.weekday} />
            </div>
        ))}
    </ul>
);

UpcomingDaysForecast.propsTypes = {
    days: PropTypes.object.isRequired,
};

export default UpcomingDaysForecast;
