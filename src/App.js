// App Functionality
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Stylesheets
import './App.scss';
import './fonts.css';

// Components
import Admin from './components/Admin';
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
      masterKegList: [],
      houseKegList: [
        {
          name: "African Amber",
          brand: "Mac & Jack's",
          price: "5.49",
          alcoholContent: "6.7",
          IBU: "30",
          description:
            "This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor.",
          pintsLeftInKeg: 99,
          id: 1
        },
        {
          name: "Oatmeal Stout",
          brand: "Oakshire",
          price: "6.00",
          alcoholContent: "6.5",
          IBU: "40",
          description:
            "A dark beer brewed with oatmeal to give a slightly nutty flavor, with finishing notes of dark chocolate and espresso beans.",
          pintsLeftInKeg: 44,
          id: 4
        },
        {
          name: "Ruby",
          brand: "McMenamins",
          price: "4.50",
          alcoholContent: "4.13",
          IBU: "5",
          description:
            "An ale that's light, crisp and refreshingly fruity. Great Western Premium 2-Row and 42 pounds of Oregon-grown raspberry puree is used to craft every colorful batch.",
          pintsLeftInKeg: 119,
          id: 3

        },
        {
          name: "Blue Ribbon",
          brand: "Pabst",
          price: "3.00",
          alcoholContent: "4.6",
          IBU: "10",
          description:
            "Sticky dive bars and ragers can attest- the cool, refreshing taste of a Pabst Blue Ribbon is seldom matched.",
          pintsLeftInKeg: 87,
          id: 5
        },
        {
          name: "Montucky Cold Snack",
          brand: "Montucky Cold Snacks",
          price: "2.79",
          alcoholContent: "4.1",
          IBU: "n/a",
          description:
            "Refreshing light beer for pow pow rippers, pony riders, gator wranglers, and badass do-gooders.",
          pintsLeftInKeg: 36,
          id: 2
        }
      ]
    };
    this.handleNewKegAddition = this.handleNewKegAddition.bind(this);
    this.sellPint = this.sellPint.bind(this);
    this.sellHousePint = this.sellHousePint.bind(this);
  }

  handleNewKegAddition(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList })
  }

  sellPint(id) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.forEach(function (keg) {
      if (keg.id == id) {
        keg.formattedPintNumber = keg.pintsLeftInKeg -= 1;
      } else {
        return false;
      }
    })
    this.setState({ masterKegList: newMasterKegList })
  }

  sellHousePint(id) {
    let newHouseKegList = this.state.houseKegs.slice();
    newHouseKegList.forEach(function (keg) {
      if (keg.id == id) {
        keg.formattedPintNumber = keg.pintsLeftInKeg -= 1;
      } else {
        return false;
      }
    })
    this.setState({ houseKegList: newHouseKegList })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/admin' render={() =>
            <Admin
              kegList={this.state.masterKegList}
              houseKegList={this.state.houseKegs} />
          } />
          <Route exact path='/' component={AgeRestriction} />
          <Route exact path='/underage' component={UnderagePage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/kegs' render={() =>
            <KegList
              houseKegList={this.state.houseKegList}
              kegList={this.state.masterKegList}
              updateHousePints={this.sellHousePint}
              updatePints={this.sellPint} />
          } />
          <Route exact path='/newkeg' render={() =>
            <NewKegForm onNewKegAddition={this.handleNewKegAddition} />
          } />
          <Route exact path='/careers' component={Careers} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route component={Error404} />
        </Switch>
      </div >
    );
  }
}

export default App;
