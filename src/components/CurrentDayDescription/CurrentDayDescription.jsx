import React from 'react';
import CurrentDescriptionItem from '../CurrentDayDescriptionItem';

import styles from './CurrentDayDescription.module.css';

const CurrentDayDescription = ({ forecast }) => (
    <div className="mt-4 mt-md-2">
        <div className={styles.descriptionItem}>
            {forecast.map(item => (
                <CurrentDescriptionItem {...item} key={item.name} />
            ))}
        </div>
    </div>
);

export default CurrentDayDescription;
