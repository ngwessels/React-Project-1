import React, { Component } from 'react';
import PropTypes from 'prop-types';


function Links(props) {



  return (
    <a href={props.url}><li key={props.key}>{props.name}</li></a>
  );
}



Links.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number,
};
export default Links;
