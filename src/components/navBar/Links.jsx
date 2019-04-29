import React from 'react';
import PropTypes from 'prop-types';
import './navBarStyles.scss';

function Links(props) {

  let links = {
    textDecoration: 'none',
    listStyleType: 'none'
  }

  return (
    <li className='linkStyle'>{props.name}</li>
  );
}



Links.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number,
};
export default Links;
