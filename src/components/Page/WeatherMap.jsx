import React from 'react';
import './pageStyles.scss';


function WeatherMap() {
  let third = {
    display: 'flex',
    flexDirection: 'row',
  }


  return (
    <div style={third}>
      <div className='weatherRadar'>
        <h3>Expore Your Area</h3>
        <img src={require('../../assets/img/weatherRadar.png')} alt='Weather Radar' id='radarMap'/>
      </div>
      <div className='ads'>
        <img src={require('../../assets/img/ad3.png')} alt='Ad' id='bigad'/>
        <h2>STAY UP TO DATE</h2>
        <div className='images'>
          <img src={require('../../assets/img/ad4.png')} alt='Ad'/>
          <img src={require('../../assets/img/ad5.png')} alt='Ad'/>
          <img src={require('../../assets/img/ad6.png')} alt='Ad'/>
        </div>
      </div>
    </div>



  );
}


export default WeatherMap;
