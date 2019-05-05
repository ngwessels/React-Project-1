import React from 'react';
import './FooterStyles.scss';
import PropTypes from 'prop-types';
import Links from './Links';


class FooterMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list;
    this.FooterTop = props.footerTop;
    this.FooterBottom = props.footerBottom;
  }

  render() {
    let that = this;
    return (
      <div className='footer'>
        <div className='top'>
          <img id='connect' src={require('../../assets/img/connect.png')} alt='Connect with us' />
          <img id='owners' src={require('../../assets/img/owners.png')} alt='Owned By' />
        </div>
        <div className='bottom'>
          <ul id='top-ul'>
            {that.state.FooterTop.map((items, index) => (
              <Links key={index} index={index} name={items.info} handle={this.FooterTop} prevName={items.prevName} />
            ))}
          </ul>
          <ul id='bottom-ul'>
            {that.state.FooterBottom.map((items, index) => (
              <Links key={index} index={index} name={items.info} handle={this.FooterBottom} prevName={items.prevName} />
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
  footerTop: PropTypes.func,
  footerBottom: PropTypes.func,
};

export default FooterMain;
