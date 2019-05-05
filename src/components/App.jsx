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
        { name: 'Today', pressedTotal: 0},
        { name: 'Hourly', pressedTotal: 0 },
        { name: 'Fiveday', pressedTotal: 0 },
        { name: 'Tenday', pressedTotal: 0 },
        { name: 'Weekend', pressedTotal: 0 },
        { name: 'Monthly', pressedTotal: 0 },
        { name: 'Maps', pressedTotal: 0 },
        { name: 'More', pressedTotal: 0 }
      ],
      FooterTop: [
        {info: 'FeedBack', pressedTotal: 0}, {info: 'Careers', pressedTotal: 0}, {info: 'Download Apps', pressedTotal: 0}, {info: 'Press Room', pressedTotal: 0}, {info: 'Advertise With Us', pressedTotal: 0}, {info: 'TV', pressedTotal: 0}, {info: 'Newsletters and Alerts', pressedTotal: 0}
      ],
      FooterBottom: [
        {info: 'Terms of Use', pressedTotal: 0}, {info: 'Privacy Policy', pressedTotal: 0}, {info: 'Parental Controls', pressedTotal: 0}, {info: 'Ad Choice', pressedTotal: 0}, {info: 'Ad Partners', pressedTotal: 0}, {info: 'Analytics Partners', pressedTotal: 0}, {info: 'Data Rights', pressedTotal: 0}
      ]
    };
    this.navbarClick = this.navbarClick.bind(this);
    this.footertopClick = this.footertopClick.bind(this);
    this.footerbottomClick = this.footerbottomClick.bind(this);

  }

  navbarClick(num) {
    let reName = Object.assign(this.state.navBar);
    let currentName;
    if(this.state.navBar[num].pressedTotal > 5) {
      reName[num].name = "";
    } else {
      if(this.state.navBar[num].name != this.state.navBar[num].prevName && this.state.navBar[num].prevName != undefined) {
        currentName = this.state.navBar[num].prevName;
        reName[num].name = currentName;
        reName[num].pressedTotal = this.state.navBar[num].pressedTotal + 1;
      } else {
        const userInput = prompt("What do you want the new link to say?");
        currentName = this.state.navBar[num].name;
        reName[num].prevName = currentName;
        reName[num].name = userInput;
        reName[num].pressedTotal = this.state.navBar[num].pressedTotal + 1;
      }
    }
    this.setState({ reName });
  }

  footertopClick(num) {
    let reName = Object.assign(this.state.FooterTop);
    let currentName;
    console.log(this.state.FooterTop[num]);
    if(this.state.FooterTop[num].pressedTotal > 5) {
      reName[num].info = "";
    } else {
      if(this.state.FooterTop[num].info != this.state.FooterTop[num].prevName && this.state.FooterTop[num].prevName != undefined) {
        currentName = this.state.FooterTop[num].prevName;
        reName[num].info = currentName;
        reName[num].pressedTotal = this.state.FooterTop[num].pressedTotal + 1;
      } else {
        const userInput = prompt("What do you want the new link to say?");
        currentName = this.state.FooterTop[num].info;
        reName[num].prevName = currentName;
        reName[num].info = userInput;
        reName[num].pressedTotal = this.state.FooterTop[num].pressedTotal + 1;
      }
    }
    this.setState({ reName });
  }

  footerbottomClick(num) {
    let reName = Object.assign(this.state.FooterBottom);
    let currentName;
    if(this.state.FooterBottom[num].pressedTotal > 5) {
      reName[num].info = "";
    }
    if(this.state.FooterBottom[num].info != this.state.FooterBottom[num].prevName && this.state.FooterBottom[num].prevName != undefined) {
      currentName = this.state.FooterBottom[num].prevName;
      reName[num].info = currentName;
      reName[num].pressedTotal = this.state.FooterBottom[num].pressedTotal + 1;
      console.log(this.state.FooterBottom[num].pressedTotal)
    } else {
      const userInput = prompt("What do you want the new link to say?");
      currentName = this.state.FooterBottom[num].info;
      reName[num].prevName = currentName;
      reName[num].info = userInput;
      reName[num].pressedTotal = this.state.FooterBottom[num].pressedTotal + 1;
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
