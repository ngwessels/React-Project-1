import React from 'react';
import PropTypes from 'prop-types';
import './navBarStyles.scss';

function Links(props) {
  let links = {
    textDecoration: 'none',
    listStyleType: 'none'
  }


  function handleClick() {
    props.handle(props.index, 'Clicked');
  }

  return (
    <li className='linkStyle' onClick={handleClick} >{props.name} </li>
  );
}



Links.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number,
  handle: PropTypes.func,
  prevName: PropTypes.string,
};
export default Links;
