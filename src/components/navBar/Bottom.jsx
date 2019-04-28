import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Links from './Links.jsx';
import './navBarStyles.scss';






class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list;
    this.object = this.state.list;
  }

  render() {
    let that = this;
    let currentObject = this.object;
    console.log(this.object);
    let style = {
      color: 'white',
      width: '80%',
      height: '20px',
      margin: '0 auto',
      marginTop: '0px',
    };


    console.log(this.object.navBar);
    return(
      <div className='bottom-nav'>
        <div className='bottom-nav-width'>
          {that.object.navBar.map((items, index) => (
            <a href={items.url} className='linkTags' key={index}>
              <Links url={items.url} name={items.name} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
Bottom.propTypes = {
  list: PropTypes.object,
}

export default Bottom;
