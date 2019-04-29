import React from 'react';
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
    return(
      <div className='bottom-nav'>
        <div className='bottom-nav-width'>
          {that.object.navBar.map((items, index) => (
            <a href={items.link} className='linkTags' key={index}>
              <Links url={items.link} name={items.name} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}
Bottom.propTypes = {
  list: PropTypes.object,
};

export default Bottom;
