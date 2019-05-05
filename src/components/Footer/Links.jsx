import React from 'react';

import PropTypes from 'prop-types';



function Links(props) {

  function handleClick() {
    console.log(props.index)
    props.handle(props.index, 'Clicked');
  }

return (
  <li onClick={handleClick}>{props.name}</li>
)





}

Links.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  handle: PropTypes.func,
  prevName: PropTypes.string,
};
export default Links;
