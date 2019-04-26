import React, { Component } from 'react';
import Header from './navBar/Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Page from './Page/PageBody';
import FooterMain from './Footer/FooterMain';




class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterList:[
        {link: 'https://weather.com/weather/today', name: 'Today', key: 1},
      ],
    };
  }



  render() {
    return (
      <div>
        <Header list={this.state.masterList} />
        <Switch>
          <Route exact path='/' component={Page}/>
          <Route component={Error404}/>
        </Switch>
        <FooterMain />
      </div>
    );
  }

}

export default App;
