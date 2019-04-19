import React from 'react';



function TopAd() {
  let imageBody = {
    margin: '0 auto',
    width: '728px',
    height: '90px',

  };

  let imageStored = {
    margin: '0 auto',
    width: '728px',
    height: '90px',

  };

  let image = {
    marginTop: '19px',
    width: '728px',
    height: '90px',
  };

  return (
    <div style={imageBody}>
      <div style={imageStored}>
        <img style={image} src={require('../../assets/img/ad1.png')} alt='Ad' />
      </div>
    </div>


  );
}

export default TopAd;
