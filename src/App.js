import React from 'react';
import { Menu } from './Task/Menu/Menu';
import { HistoryWrap } from './Task/SecondPage/History';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { CoordsWeatherWrap } from './Task/FirstPage/CoordsWeather';
import '../src/Task//Stylesheets/Style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/coordinates' />
        </Route>
        <Route path='/coordinates'>
          <CoordsWeatherWrap />
        </Route>
        <Route path='/history'>
          <HistoryWrap />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
