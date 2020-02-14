// App Functionality
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Stylesheets
import './App.scss';
import './fonts.css';

// Components
import HomePage from './components/HomePage';
import NewKegForm from './components/NewKegForm';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import KegList from './components/KegList';
import AgeRestriction from './components/AgeRestriction';
import UnderagePage from './components/Underage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={AgeRestriction} />
        <Route exact path='/underage' component={UnderagePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/kegs' component={KegList} />
        <Route exact path='/newkeg' component={NewKegForm} />
        <Route exact path='/careers' component={Careers} />
        <Route exact path='/aboutus' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
