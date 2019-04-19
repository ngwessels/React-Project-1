import React from 'react';



function TopNews() {

  let firstSection = {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '650px',
  };

  return (
    <div style={firstSection}>
      <div className='left-column'>
        <div className='container'>

          <a href='https://weather.com/news/news/2019-03-28-montana-north-dakota-homes-evacuated-flooding'><img src={require('../../assets/img/statewide-flood.png')} alt='Video of Massive Flood'/></a>
          <div className='text'>
            <h1>Statewide Flood Emergency:</h1>
            <h1>Homes Evacuated, Highway</h1>
            <h1>Closed</h1>
            <p>'All signs point to a high potential for significant floods that could overwhelm local response capabilities across the state'</p>
            <a id='link'><p>SEE MORE -></p></a>
          </div>
        </div>
      </div>
      <div className='right-column'>
        <div className='left-left-column'>
          <div className='top articles'>
            <img src={require('../../assets/img/severe-threat.png')} alt='Severe Threat Weather'/>
            <p>Severe Threat: Hail, Damaging Wind Possible</p>
          </div>
          <div className='middle articles'>
            <img src={require('../../assets/img/Outrage.jpg')} alt='Outrage after StockPile'/>
            <p>Outrage After Stockpile of Bottled Water Discovered in</p>
          </div>
          <div className='bottom articles'>
            <img src={require('../../assets/img/tree-pollen.jpg')} alt='Tree Pollen'/>
            <p>Nightmare Tree Pollen Situation</p>
          </div>
        </div>
        <div className='right-left-column'>
          <div className='container'>
            <img src={require('../../assets/img/ad2.jpg')} alt='Ad2'/>
            <div className='text'>
              <h2>Does Your Workforce</h2>
              <h2>Have The Tools They</h2>
              <h2>Need to Thrive?</h2>
              <h6>SPONSORED BY CITRIX</h6>
              <p>Equip your workforce with a secure,</p>
              <p>unified platform-so they can access</p>
              <p>the tools and apps they need to get</p>
              <p>their work done their way</p>

            </div>
            <button>See More</button>
          </div>
        </div>
      </div>
    </div>




  );
}


export default TopNews;
