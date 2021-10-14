import React from 'react';
import PropTypes from 'prop-types';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';
import Loader from '../Loader';

import styles from './Forecast.module.css';

const Forecast = ({ forecast, isLoading }) => (
    <>
        {isLoading ? (
            <Loader />
        ) : (
            <div className="container-fluid">
                <UpcomingDaysForecast days={forecast.upcomingDays} />
                <div className={styles.secondgrid}>
                    <div className="mt-5">
                        <h3 className={styles.font}>Today's Highlight</h3>
                        <CurrentDayDescription forecast={forecast.currentDayDetails} />
                    </div>
                </div>
            </div>
        )}
    </>
);

Forecast.propTypes = {
    forcast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;
