import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import shortid from 'shortid';

class MainContainer extends React.Component {
  state = {
    tweets: this.props.initialTweets,
  };
  addNewTweet = (newTweetText) => {
    this.setState((prevState) => ({
      tweets: [
        {
          text: newTweetText,
          name: 'Mr. Guest',
          timeDisplay: 'just now',
          id: shortid(),
          likes: 0,
          replies: 0,
          retweets: 0,
        },
        ...prevState.tweets,
      ],
    }));
  };
  render() {
    return (
      <div>
        <TweetBox onSubmit={this.addNewTweet} />
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default MainContainer;
