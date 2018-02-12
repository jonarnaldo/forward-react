import React from 'react';
import TweetBox from './TweetBox';
import TweetList from './TweetList';

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
  render() {
    return (
      <div>
        <TweetBox />
        <TweetList tweets={fakeData.tweets} />
      </div>
    );
  }
}

export default MainContainer;
