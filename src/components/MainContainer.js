import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <TweetBox />
        <TweetList />
      </div>
    );
  }
}

export default MainContainer;
