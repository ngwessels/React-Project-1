import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../../scss/styles.scss';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import PropTypes from 'prop-types'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    let headerStyle = {
      width: '100%',
      backgroundColor: 'black',
      height: '145px',
    };

    return (
      <div style={headerStyle}>
        <Top />
        <Middle />
        <Bottom list={this.state}/>
      </div>
    );
  }
}

Header.propTypes = {
  list: PropTypes.array,
}


export default Header;




// <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
