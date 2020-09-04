import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const ShowCoords = ({ coords }) => {
  if (!coords) {
    return '....Loading....';
  } else {
    return (
      <>
        <h1 className='coord-title'>{`Ваши координаты: ${coords.longitude}, ${coords.latitude}`}</h1>
        <ShowMap coords={coords} />
      </>
    );
  }
};

export const ShowAddress = ({ address }) => {
  if (!address) {
    return '....Loading....';
  } else {
    return <h1 className='coord-title'>{`Ваш адрес: ${address}`}</h1>;
  }
};

export const ShowWeather = ({ weatherData }) => {
  if (!weatherData) {
    return '....Loading....';
  } else {
    return (
      <div className='weather-box'>
        <div className='todayWeather'>
          <h2 className='regionWeather'>Погода в вашем регионе</h2>
          <h3>На сегодня</h3>
          <div>{weatherData[0].dt_txt}</div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`}
            />
            <div>{`Температура: ${Math.ceil(
              weatherData[0].main.temp
            )}\u00B0C`}</div>
            <div>{`Ощущения: ${Math.ceil(
              weatherData[0].main.feels_like
            )}\u00B0C`}</div>
            <div>{`Ветер: ${weatherData[0].wind.speed} м/с`}</div>
          </div>

          <div></div>
        </div>
        <div className='fourDaysForecast'>
          <h3>На 4 дня</h3>
          <ul>
            {weatherData.map((weatherItem, index) => {
              if (index == 0 || index % 8) {
                return;
              } else {
                return (
                  <li key={index}>
                    <span>{weatherItem.dt_txt}</span>
                    {`${Math.ceil(weatherItem.main.temp)}\u00B0C`}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
};

const ShowMap = ({ coords }) => (
  <YMaps>
    <div>
      <Map
        className='map'
        defaultState={{ center: [coords.latitude, coords.longitude], zoom: 13 }}
      >
        <Placemark geometry={[coords.latitude, coords.longitude]} />
      </Map>
    </div>
  </YMaps>
);
