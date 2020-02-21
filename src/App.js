// App Functionality
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Stylesheets
import './App.scss';
import './fonts.css';

// Components
import HomePage from './components/HomePage';
import NewKegForm from './components/NewKegForm';
import AboutUs from './components/AboutUsPage';
import Careers from './components/Careers';
import KegList from './components/KegList';
import AgeRestriction from './components/AgeRestriction';
import UnderagePage from './components/UnderAge';
import Error404 from './components/Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKegAddition = this.handleNewKegAddition.bind(this);
  }

  handleNewKegAddition(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={AgeRestriction} />
          <Route exact path='/underage' component={UnderagePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/kegs' component={KegList} />
          <Route exact path='/newkeg' render={() => (
            <NewKegForm onNewKegAddition={this.handleNewKegAddition} />
          )} />
          <Route exact path='/careers' component={Careers} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route component={Error404} />
        </Switch>
      </div >
    );
  }
}

export default App;
