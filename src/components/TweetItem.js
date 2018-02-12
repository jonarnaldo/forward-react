import React from 'react';

class TweetItem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>Justin Searls</span>
          <span>57m</span>
        </div>
        <div>
          Hello, this is a fake tweet. Sad.
        </div>
        <div>
          <span>REP</span>
          <span>RET</span>
          <span>LIKES</span>
        </div>
      </div>
    );
  }
}

export default TweetItem;
