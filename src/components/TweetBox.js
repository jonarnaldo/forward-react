import React from 'react';

class TweetBox extends React.Component {
  state = {
    newTweetText: '',
  };

  handleInputChange = (event) => {
    this.setState({ newTweetText: event.target.value });
  }

  isValid = () => {
    return this.state.newTweetText.length <= 280;
  }

  render() {
    return (
      <form>
        <textarea
          name="tweetText"
          value={this.state.newTweetText}
          required
          onChange={this.handleInputChange}
        />
        Valid: {this.isValid() ? 'Yes': 'No'}
        <button>Tweet</button>
      </form>
    );
  }
}

export default TweetBox;
