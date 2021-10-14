import React from 'react';
import PropTypes from 'prop-types';

import styles from './CurrentDayDescriptionItem.module.css';

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
    <div className={`${styles.root}`}>
        <p className={` ${styles.name} mb-2 `}>{name}</p>
        <p className={styles.units}>
            {value} {unit}
        </p>
    </div>
);

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
