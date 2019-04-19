import React from 'react';


function Bottom() {

  let style = {
    color: 'white',
    width: '80%',
    height: '20px',
    margin: '0 auto',
    marginTop: '0px',
  };

  return(
    <div>
      <div style={style}>
        <div className='bottom-nav-width'>
          <ul>
            <a href='https://weather.com/weather/today' id='Today'><li>Today</li></a>
            <a href='https://weather.com/weather/hourbyhour/' id='Hourly'><li>Hourly</li></a>
            <a href='https://weather.com/weather/5day/' id='FiveDay'><li>Fiveday</li></a>
            <a href='https://weather.com/weather/tenday/' id='TenDay'><li>TenDay</li></a>
            <a href='https://weather.com/weather/weekend/' id='Weekend'><li>Weekend</li></a>
            <a href='https://weather.com/weather/monthly/' id='Monthly'><li>Monthly</li></a>
            <a href='https://weather.com/weather/radar/interactive/' id='Maps'><li>Maps</li></a>
            <li id='More'> More</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Bottom;
