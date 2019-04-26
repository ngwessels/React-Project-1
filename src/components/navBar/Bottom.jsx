import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Links from './Links.jsx';
class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list;
    this.object = this.state.list.masterList[0];
  }

  render() {
    console.log(this.object);
    let style = {
      color: 'white',
      width: '80%',
      height: '20px',
      margin: '0 auto',
      marginTop: '0px',
    };
    let results = this.object.map(function(items) =>
      <Links key={items.id} url={items.url} name={items.name} />
    )

    return(
      <div>
        {Links}
      </div>
    );
  }
}
Bottom.propTypes = {
  list: PropTypes.object,
}

export default Bottom;
