import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import shortid from 'shortid';

const fakeData = {
  tweets: [
    {
      name: 'Justin',
      timeDisplay: '57m',
      text: 'Hello this is a semi-fake tweet 1',
      id: 'oeuaoeuaou',
      likes: 7,
      replies: 18,
      retweets: 0,
    },
    {
      name: 'Justin',
      timeDisplay: '57m',
      text: 'Hello this is a semi-fake tweet 2',
      id: 'oekjq;kjq',
      likes: 7,
      replies: 18,
      retweets: 0,
    },
    {
      name: 'Justin',
      timeDisplay: '57m',
      text: 'Hello this is a semi-fake tweet 3',
      id: 'qjk;kqjk',
      likes: 7,
      replies: 18,
      retweets: 0,
    },
  ],
};

class MainContainer extends React.Component {
  state = {
    tweets: fakeData.tweets,
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
