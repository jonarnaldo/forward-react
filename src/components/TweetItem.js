import React from 'react';

class TweetItem extends React.Component {
  render() {
    const {
      name,
      timeDisplay,
      text,
      likes,
      replies,
      retweets,
    } = this.props.tweet;
    return (
      <div className="tweet-item">
        <div>
          <span>{name}</span>
          <span>{timeDisplay}</span>
        </div>
        <div>{text}</div>
        <div>
          <span>{replies}</span>
          <span>{retweets}</span>
          <span>{likes}</span>
        </div>
      </div>
    );
  }
}

export default TweetItem;
