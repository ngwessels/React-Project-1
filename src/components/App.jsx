import React from 'react';
import Header from './navBar/Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Page from './Page/PageBody';
import FooterMain from './Footer/FooterMain';




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      navBar:[
        { name: 'Today'},
        { name: 'Hourly' },
        { name: 'Fiveday' },
        { name: 'Tenday' },
        { name: 'Weekend' },
        { name: 'Monthly' },
        { name: 'Maps' },
        { name: 'More' }
      ],
      FooterTop: [
        {info: 'FeedBack'}, {info: 'Careers'}, {info: 'Download Apps'}, {info: 'Press Room'}, {info: 'Advertise With Us'}, {info: 'TV'}, {info: 'Newsletters and Alerts'}
      ],
      FooterBottom: [
        {info: 'Terms of Use'}, {info: 'Privacy Policy'}, {info: 'Parental Controls'}, {info: 'Ad Choice'}, {info: 'Ad Partners'}, {info: 'Analytics Partners'}, {info: 'Data Rights'}
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num, newName, prevName) {
    let reName = Object.assign(this.state.navBar);
    let currentName;
    if(this.state.navBar[num].name == 'Clicked') {
      currentName = this.state.navBar[num].prevname;
      reName[num].name = currentName;
    } else {
      currentName = this.state.navBar[num].name;
      reName[num].prevName = currentName;
      reName[num].name = newName;
    }
    this.setState({ reName });

  }


  render() {
    return (
      <div>
        <Header list={this.state} handle={this.handleClick}/>
        <Switch>
          <Route exact path='/' component={Page}/>
          <Route component={Error404}/>
        </Switch>
        <FooterMain list={this.state}/>
      </div>
    );
  }

}

export default App;
