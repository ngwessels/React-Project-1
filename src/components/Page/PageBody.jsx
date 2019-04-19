import React from 'react';
import './pageStyles.scss';
import TopAd from './TopAd';
import TopNews from './TopNews';
import Trending from './Trending';
import WeatherMap from './WeatherMap';




function PageBody() {

  let pageStyle = {
    maxWidth: '1170px',
    margin: '0 auto',
    marginTop: '40px',
  };


  return (
    <div>
      <TopAd />
      <div style={pageStyle}>
        <TopNews />
        <hr/>
        <Trending />
        <WeatherMap />
      </div>
    </div>


  );
}

export default PageBody;
