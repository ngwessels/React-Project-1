import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Links from './Links.jsx';
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

    let allLinks = {
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '1370px',
      width: '80%',
      justifyContent: 'center',
      height: '20px'
    }
    let container = {
      width: '100%',
      height: '20px',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'

    }

    console.log(this.object.masterList);
    return(
      <div style={allLinks}>
        <div style={container}>
          {that.object.masterList.map((items, index) => (
            <a href={items.url}>
              <Links key={index} url={items.url} name={items.name} />
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
