import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links.jsx';
import './navBarStyles.scss';

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.handle = props.handle;
    this.state = props;
    this.object = this.state.list.navBar;
  }

  render() {
    let that = this;
    return(
      <div className='bottom-nav'>
        <div className='bottom-nav-width'>
          {that.object.map((items, index) => (
            <a href={items.link} className='linkTags' key={index}>
              <Links name={items.name} index={index} handle={this.handle} prevName={items.prevName}/>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
Bottom.propTypes = {
  list: PropTypes.object,
  handle: PropTypes.func,

};

export default Bottom;
