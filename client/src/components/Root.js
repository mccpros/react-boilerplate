// import PropTypes from 'prop-types';
import React, { Component } from 'react';

// We should probably check prop types
// const propTypes = {
//
// };

class Root extends Component {
  componentWillMount() {
    // Start with an action
    this.props.fetchInfo();
  }

  renderInfo() {
    const { wpInfo } = this.props;

    // If loading, say it
    if(wpInfo && wpInfo.loading) {
      return 'Loading...';
    } else {
      return wpInfo.data.title;
    }
  }

  render() {
    return (
      <div>
        <p>{ this.renderInfo() }</p>
      </div>
    );
  }
}

// Root.propTypes = propTypes;

export default Root;
