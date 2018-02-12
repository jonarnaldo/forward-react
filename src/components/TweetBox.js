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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      this.props.onSubmit(this.state.newTweetText);
    }
  }

  render() {
    const isValid = this.isValid();
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="tweetText"
          value={this.state.newTweetText}
          required
          onChange={this.handleInputChange}
        />
        Valid: {isValid ? 'Yes': 'No'}
        <button disabled={!isValid}>Tweet</button>
      </form>
    );
  }
}

export default TweetBox;
