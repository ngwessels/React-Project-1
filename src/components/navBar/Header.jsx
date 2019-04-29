import React from 'react';
import '../../scss/styles.scss';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import PropTypes from 'prop-types';
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    let headerStyle = {
      width: '100%',
      backgroundColor: 'black',
      height: '145px',
    };
    return (
      <div style={headerStyle}>
        <Top />
        <Middle />
        <Bottom list={this.state}/>
      </div>
    );
  }
}
Header.propTypes = {
  list: PropTypes.object,
};
export default Header;
