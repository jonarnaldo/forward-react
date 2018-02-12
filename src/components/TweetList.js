import React from 'react';
// import PropTypes from 'prop-types';

import TweetItem from './TweetItem';

class TweetList extends React.Component {
  // static propTypes = {
  //   tweets: PropTypes.arrayOf(PropTypes.object)
  // };
  render() {
    return (
      <div>
        {this.props.tweets.map((tweet) => (
          <TweetItem key={tweet.id} tweet={tweet} />
        ))}
      </div>
    );
  }
}

export default TweetList;
