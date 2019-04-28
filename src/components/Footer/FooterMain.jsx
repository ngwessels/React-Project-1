import React, { Component } from 'react';
import './FooterStyles.scss';
import PropTypes from 'prop-types';
class FooterMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    let that = this;
    console.log(this.state);
    return (
      <div className='footer'>
        <div className='top'>
          <img id='connect' src={require('../../assets/img/connect.png')} alt='Connect with us' />
          <img id='owners' src={require('../../assets/img/owners.png')} alt='Owned By' />
        </div>
        <div className='bottom'>
          <ul id='top-ul'>
            {that.state.list.FooterTop.map((items, index) => (
            <li key={index}>{items.info}</li>
            ))}
          </ul>
          <ul id='bottom-ul'>
            {that.state.list.FooterBottom.map((items, index) => (
            <li key={index}>{items.info}</li>
            ))}
          </ul>
          <img id='georgia' src={require('../../assets/img/georgia.png')} alt='georgia' />
          <img id='poweredby' src={require('../../assets/img/powered-by.png')} alt='Powered By' />
        </div>
      </div>
    );
  }
}

FooterMain.propTypes = {
  list: PropTypes.object,
}

export default FooterMain;
