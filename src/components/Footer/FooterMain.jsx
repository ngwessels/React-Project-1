import React from 'react';
import './FooterStyles.scss';

function FooterMain() {



  return (
    <div className='footer'>
      <div className='top'>
        <img id='connect' src={require('../../assets/img/connect.png')} alt='Connect with us' />
        <img id='owners' src={require('../../assets/img/owners.png')} alt='Owned By' />
      </div>
      <div className='bottom'>
        <ul id='top-ul'>
          <li>FeedBack</li>
          <li>Careers</li>
          <li>Download Apps</li>
          <li>Press Room</li>
          <li>Advertise With Us</li>
          <li>TV</li>
          <li>Newsletters and Alerts</li>
        </ul>
        <ul id='bottom-ul'>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Parental Controls</li>
          <li>Ad Choice</li>
          <li>Ad Partners</li>
          <li>Analytics Partners</li>
          <li>Data Rights</li>

         </ul>
         <img id='georgia' src={require('../../assets/img/georgia.png')} alt='georgia' />
         <img id='poweredby' src={require('../../assets/img/powered-by.png')} alt='Powered By' />
      </div>
    </div>


  );
}

export default FooterMain;
