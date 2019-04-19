import React from 'react';
import './pageStyles.scss';



function Ads() {

  return (
    <div className='fifth'>
      <div className='container'>
        <div className='ads'>
          <img src={require('../../assets/img/ad8.png')} alt='Ad' />
          <img src={require('../../assets/img/ad9.png')} alt='Ad' />
          <img src={require('../../assets/img/ad10.png')} alt='Ad' />
        </div>
        <h3>OUR PHOTO GALLERY PICKS</h3>
        <div className='photo-gallery'>
          <div className='thing'>
            <img src={require('../../assets/img/humitarian.jpg')} alt='Humanitarian' />
            <h5>Humanitarian Crisis COntinues in Mozambique After Cyclone Idai</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/katrina.jpg')} alt='Katrina Flooding' />
            <h5>After the Waters Recede: A Peek Inside New Orleans New Katrina Flooded</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/magnifying-spring.jpg')} alt='Spring' />
            <h5>Magnifying Spring with Zoltan Attila Kecskes (Photos)</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/super-worm-equinox.jpg')} alt='Super Worm Equinox' />
            <h5>Wednesday Night's Super Worm Equinox Moon was the Last SuperMoon of 2019</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/historic-flooding-continues.jpg')} alt='History Flooding' />
            <h5>Historic Flooding Continues in Midwest (PHOTOS)</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/celebrate-spring.jpg')} alt='Celebrate Spring' />
            <h5>Nest Way to Celebrate Spring in Every State (PHOTOS)</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/torrential-rain.jpg')} alt='Torrential Rain' />
            <h5>Torrential Rain Triggers Deadly Flooding in Indonesia (Photos)</h5>
          </div>
          <div className='thing'>
            <img src={require('../../assets/img/ten-places-to-visiti.jpg')} alt='Ten Places to Visit' />
            <h5>10 Places You Have to See in March (PHOTOS)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
