import React from 'react';

import TweetItem from './TweetItem';

class TweetList extends React.Component {
  render() {
    return (
      <div>
        <TweetItem />
        <TweetItem />
        <TweetItem />
        <TweetItem />
        <TweetItem />
      </div>
    );
  }
}

export default TweetList;
