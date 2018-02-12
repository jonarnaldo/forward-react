import React from 'react';
class TweetBox extends React.Component {
  render() {
    return (
      <form>
        <textarea name="tweetText" required></textarea>
        <button>Tweet</button>
      </form>
    );
  }
}
export default TweetBox;
