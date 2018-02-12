import React from 'react';
import PropTypes from 'prop-types';

import MainContainer from './MainContainer';

class App extends React.PureComponent {
  static propTypes = {
    initialData: PropTypes.object,
  };
  render() {
    return <MainContainer initialTweets={this.props.initialData.tweets} />;
  }
}

export default App;
