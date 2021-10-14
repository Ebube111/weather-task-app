const currentDayForecast = data => [
    {
        name: 'Wind status',
        value: Math.round(data.wind_speed),
        unit: 'mph',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'Visibility',
        value: Math.round(data.visibility),
        unit: 'miles',
    },
    {
        name: 'Air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    // {
    //     name: 'max temp',
    //     value: Math.round(data.max_temp),
    //     unit: '°C',
    // },
    // {
    //     name: 'min temp',
    //     value: Math.round(data.min_temp),
    //     unit: '°C',
    // },
];

export default currentDayForecast;
