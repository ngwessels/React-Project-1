import React from 'react';
// import { Link } from 'react-router-dom';
import '../../scss/styles.scss';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

function Header(){

  let headerStyle = {
    width: '100%',
    backgroundColor: 'black',
    height: '145px',
  };
  let wrap = {
    
  }
  return (
    <div style={headerStyle}>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default Header;




// <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
