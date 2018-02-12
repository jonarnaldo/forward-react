const express = require('express');

const app = express();

const data = {
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

app.get('/tweets', (req, res) => {
  res.send(data);
})

app.listen(8000, () => {
  console.log('Okay');
});
