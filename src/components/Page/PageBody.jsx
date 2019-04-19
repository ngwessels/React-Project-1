import React from 'react';
import './pageStyles.scss';
import TopAd from './TopAd';
import TopNews from './TopNews';
function PageBody() {

  let pageStyle = {
    maxWidth: '1170px',
    margin: '0 auto',
    marginTop: '40px',
  }


  return (
    <div>
      <TopAd />
      <div style={pageStyle}>
        <TopNews />
        <hr/>
      </div>
    </div>


  );
}

export default PageBody;
