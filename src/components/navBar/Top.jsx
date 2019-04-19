import React from 'react';
import './navBarStyles.scss';
function Top() {

  let inputLength = {
    width: '100%',
    height: '60px',

  };

  let magnify = {

  };

  let searchInput = {

  };

  let topNav = {
    height: '60px',
    width: '100%',
    maxWidth: '1370px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
  };


  let weatherChannelLogo = {
    width: '62.5px',
    height: '60px',
  };



  return(
    <div style={topNav}>
      <a><img src={require('../../assets/img/weatherChannelLogo.png')} alt='Weather Channel Logo' style={weatherChannelLogo} /></a>
      <div style={inputLength} className='inputLength'>
        <div id='input'>
          <img src={require('../../assets/img/magnifyingglass.png')} alt='search weather at your location' style={magnify} id='magnify' />
          <input type='text' placeholder='Show me the weather in... city, zip, or place' style={searchInput} id='searchInput'/>
        </div>
      </div>
      <div className='menu'>
        <a><img src={require('../../assets/img/us.png')} alt='US Fahrenheight' id='us'/></a>
        <div class='vl'>
        </div>
        <a><img src={require('../../assets/img/menu.png')} alt='Menu' id='menu'/></a>

      </div>
    </div>

  );
}

export default Top;
