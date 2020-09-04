import { Component } from 'react';
import moment from 'moment';

export class CoordinatesAndWeather extends Component {
  state = {
    coords: null,
    isLoading: true,
    error: null,
    address: null,
    weatherData: null,
  };

  componentDidMount() {
    let promise = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    promise
      .then((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let coordsObj = {
          latitude: latitude,
          longitude: longitude,
        };

        this.setState({ coords: coordsObj });

        const key = 'c8d61517-286d-4e62-aec5-5e339788697f';

        return fetch(
          `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${key}&geocode=${longitude},${latitude}`
        ).then((response) => {
          response.json().then((data) => {
            this.setState({
              address:
                data.response.GeoObjectCollection.featureMember[0].GeoObject
                  .metaDataProperty.GeocoderMetaData.text,
            });
          });
          const API_KEY = 'ea0ddfa25955f6a751b68b2c910eb35b';
          return fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          ).then((response) => {
            response.json().then((weatherData) => {
              this.setState({ weatherData: weatherData.list }, () => {
                console.log(weatherData);
              });
              return fetch('http://localhost:3005/historyData', {
                method: 'POST',
                body: JSON.stringify({
                  coordinates: this.state.coords,
                  address: this.state.address,
                  date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                }),
                headers: {
                  'content-type': 'application/json',
                },
              });
            });
          });
        });
      })
      .catch((error) => this.setState({ error: error }))
      .finally(this.setState({ isLoading: false }));
  }

  render() {
    return this.props.children(this.state);
  }
}
