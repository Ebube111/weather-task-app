import React, { Fragment } from 'react';

import Form from '../Form';
import Error from '../Error';
import Forecast from '../Forecast';
import CurrentDay from '../CurrentDay';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <div className="row ">
                <div className={` ${styles.box} col-xl-3`}>
                    {/** Form */}
                    {!isLoading && <Form forecast={forecast} submitSearch={onSubmit} />}
                    <div className={styles.currentday}>
                        {!isLoading && forecast && <CurrentDay {...forecast.currentDay} />}
                    </div>
                    {/** Error */}
                    {isError && <Error />}
                </div>
                {/** Forcast */}
                <div className={`col-xl-9 ${styles.box2}`}>
                    {forecast ? (
                        <Forecast isLoading={isLoading} forecast={forecast} />
                    ) : (
                        <div className={styles.currentday}>
                            <div className="d-flex flex-row">
                                <h1 className="mr-3">Weather App</h1>
                                <img src="/assets/apple-touch-icon.png" height="50" alt="" />
                            </div>
                            <h6 className="font-weight-light text-white-50">
                                Click the search bar to the left, type in your location and search for the weather
                            </h6>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Page;
