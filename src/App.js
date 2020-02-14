// App Functionality
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import NewKegForm from './components/NewKegForm';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import KegList from './components/KegList';
import Counters from './components/Counters';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/newkeg' component={NewKegForm} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/kegs' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;
