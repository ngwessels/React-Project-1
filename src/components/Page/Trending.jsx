import React from 'react';
import './pageStyles.scss';


function Trending() {


  let trending = {
    width: '100%',
    height: '320px',
  };

  return (
    <div style={trending} className='trending'>
      <h3>Trending</h3>
      <div className='container'>
        <div className='trending1 trends'>
          <a href='https://weather.com/news/trending/video/strong-winds-send-man-flying'><img src={require('../../assets/img/windy.gif' )} alt='Crazy Wind'/></a>
          <h6>TRENDING NEWS</h6>
          <p>When Wind Starts to Blow, This is</p>
          <p>Why You Let Go of an Umbrella</p>
        </div>
        <div className='trending2 trends'>
          <a href='https://weather.com/storms/tornado/news/2018-03-27-april-may-june-tornadoes-peak-months'><img src={require('../../assets/img/primary-nadoes.jpg' )}alt='Tornado Risk'/></a>
          <h6>TORNADO CENTRAL</h6>
          <p>Where Tornado Risk is Greatest in</p>
          <p>the Coming Months</p>
        </div>
        <div className='trending3 trends'>
          <a href='https://weather.com/news/news/2019-03-29-deadly-frog-fungus-wiped-out-90-species'><img src={require('../../assets/img/frog.png' )}alt='Frog Apocalypse'/></a>
          <h6>NEWS</h6>
          <p>Amphibian Apocalypse Arrival?</p>
        </div>
        <div className='trending4 trends'>
          <a href='https://weather.com/news/trending/video/mystery-behind-garfield-phones-washing-up-in-france-finally-solved'><img src={require('../../assets/img/garfield.png')} alt='Garfield the Cat Mystery Solved'/></a>
          <h6>TRENDING NEWS</h6>
          <p>Decades-Long Mystery Solved: Is</p>
          <p>That Garfield?</p>
        </div>
      </div>
    </div>


  );
}


export default Trending;
