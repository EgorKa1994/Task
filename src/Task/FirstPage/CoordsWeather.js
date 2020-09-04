import React from 'react';
import { CoordinatesAndWeather } from './Smart/CoordinatesAndWeatherSmart';
import { ShowAddress, ShowCoords, ShowWeather } from './Dumb/CoordsWeatherDumb';

export const CoordsWeatherWrap = () => {
  return (
    <CoordinatesAndWeather>
      {({ coords, isLoading, error, address, weatherData }) => {
        if (isLoading) {
          return '...Loading...';
        }

        if (error) {
          return `Error: ${error.message}`;
        }

        return (
          <>
            <ShowCoords coords={coords} />
            <ShowAddress address={address} />
            <ShowWeather weatherData={weatherData} />
          </>
        );
      }}
    </CoordinatesAndWeather>
  );
};
