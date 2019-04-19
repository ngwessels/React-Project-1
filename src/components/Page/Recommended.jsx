import React from 'react';




function Recommended() {
  let style = {
    width: '100%',
    height: '300p',
  }


  return (
    <div className='fourth'>
      <h3>RECOMMENDED</h3>
      <div className='container'>
        <div className='thing'>
          <img src={require('../../assets/img/leaking.jpg')} alt='Leaking Hot Air?' />
          <h6>WINTER SAFETY AND PREPAREDNESS</h6>
          <p>Is Your House Leaking Hot Air?</p>
        </div>
        <div className='thing'>
          <img src={require('../../assets/img/allergies.jpg')} alt='ALlergies?' />
          <h6>ALLERGY</h6>
          <p>Worst Plants for Spring Allergies</p>
        </div>
        <div className='thing'>
          <img src={require('../../assets/img/safestplace-tornado.jpg')} alt='Keep Safe against a tornado' />
          <h6>TORNADO SAFETY AND PREPAREDNESS</h6>
          <p>Safest Place to Wait Out A Tornado</p>
        </div>
        <div className='thing'>
          <img src={require('../../assets/img/allerycapitols.jpg')} alt='Allergy Capitols' />
          <h6>ALLERGY</h6>
          <p>Spring Allery Capitols: WHich City</p>
          <p>Rands the Worst</p>
        </div>
      </div>
    </div>


  );
}


export default Recommended;
