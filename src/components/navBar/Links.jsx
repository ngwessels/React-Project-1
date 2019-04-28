import React, { Component } from 'react';
import PropTypes from 'prop-types';


function Links(props) {



  return (
    <li>{props.name}</li>
  );
}



Links.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number,
};
export default Links;
