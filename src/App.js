// App Functionality
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import BeerList from './components/BeerList';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/beer' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
