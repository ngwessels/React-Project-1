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
        {link: 'https://weather.com/weather/today', name: 'Today'}, {link:'https://weather.com/weather/hourly', name: 'Hourly'},
        {link: 'https://weather.com/weather/5day', name: 'Fiveday'},
        {link: 'https://weather.com/weather/tenday', name: 'Tenday'},
        {link: 'https://weather.com/weather/weekend', name: 'Weekend'},
        {link: 'https://weather.com/weather/monthly', name: 'Monthly'},
        {link: 'https://weather.com/weather/radar/interactive', name: 'Maps'},
        {name: 'More'}
      ],
      FooterTop: [
        {info: 'FeedBack'}, {info: 'Careers'}, {info: 'Download Apps'}, {info: 'Press Room'}, {info: 'Advertise With Us'}, {info: 'TV'}, {info: 'Newsletters and Alerts'}
      ],
      FooterBottom: [
        {info: 'Terms of Use'}, {info: 'Privacy Policy'}, {info: 'Parental Controls'}, {info: 'Ad Choice'}, {info: 'Ad Partners'}, {info: 'Analytics Partners'}, {info: 'Data Rights'}
      ]
    };
  }



  render() {
    return (
      <div>
        <Header list={this.state} />
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
