import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CurrentDay from '../CurrentDay';

import styles from './Form.module.css';

const Form = ({ submitSearch, forecast }) => {
    const [location, setLocation] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showDay, setShowDay] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') {
            return;
        }
        submitSearch(location);
        setShowForm(false);
        setShowDay(true);
    };
    return (
        <>
            <form onSubmit={onSubmit} className="pt-5">
                {showForm ? (
                    <div className={styles.flex}>
                        <fieldset>
                            <input
                                aria-label="location"
                                type="text"
                                className={`${styles.input}`}
                                placeholder="Search for location"
                                required
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </fieldset>
                        <div>
                            <button type="submit" className={styles.button} onClick={onSubmit}>
                                Search
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button onClick={() => setShowForm(true)} className={styles.btn}>
                            Search for places
                        </button>
                    </div>
                )}
            </form>
            {/** LOAD TODAY'S WEATHER */}
            <div className={styles.day}>
                {showDay && forecast && (
                    <div>
                        <CurrentDay {...forecast.currentDay} />
                    </div>
                )}
            </div>
        </>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
    forecast: PropTypes.object,
};

export default Form;
