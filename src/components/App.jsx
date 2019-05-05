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
    this.navbarClick = this.navbarClick.bind(this);
    this.footertopClick = this.footertopClick.bind(this);
    this.footerbottomClick = this.footerbottomClick.bind(this);

  }

  navbarClick(num) {
    let reName = Object.assign(this.state.navBar);
    let currentName;
    if(this.state.navBar[num].name != this.state.navBar[num].prevName && this.state.navBar[num].prevName != undefined) {
      currentName = this.state.navBar[num].prevName;
      reName[num].name = currentName;
    } else {
      const userInput = prompt("What do you want the new link to say?");
      currentName = this.state.navBar[num].name;
      reName[num].prevName = currentName;
      reName[num].name = userInput;
    }
    this.setState({ reName });
  }

  footertopClick(num) {
    let reName = Object.assign(this.state.FooterTop);
    let currentName;
    console.log(this.state.FooterTop[num]);
    if(this.state.FooterTop[num].info != this.state.FooterTop[num].prevName && this.state.FooterTop[num].prevName != undefined) {
      currentName = this.state.FooterTop[num].prevName;
      reName[num].info = currentName;
    } else {
      const userInput = prompt("What do you want the new link to say?");
      currentName = this.state.FooterTop[num].info;
      reName[num].prevName = currentName;
      reName[num].info = userInput;
    }
    this.setState({ reName });
  }

  footerbottomClick(num) {
    let reName = Object.assign(this.state.FooterBottom);
    let currentName;
    if(this.state.FooterBottom[num].info != this.state.FooterBottom[num].prevName && this.state.FooterBottom[num].prevName != undefined) {
      currentName = this.state.FooterBottom[num].prevName;
      reName[num].info = currentName;
    } else {
      const userInput = prompt("What do you want the new link to say?");
      currentName = this.state.FooterBottom[num].info;
      reName[num].prevName = currentName;
      reName[num].info = userInput;
    }
    this.setState({ reName });
  }


  render() {
    return (
      <div>
        <Header list={this.state} handle={this.navbarClick}/>
        <Switch>
          <Route exact path='/' component={Page}/>
          <Route component={Error404}/>
        </Switch>
        <FooterMain list={this.state} footerBottom={this.footerbottomClick} footerTop={this.footertopClick}/>
      </div>
    );
  }

}

export default App;
