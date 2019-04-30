import React from 'react';
import { Feed } from 'semantic-ui-react'
import eventsFixtures from './events';

export default class ScrollingFeed extends React.Component {
  state = {
    events: eventsFixtures,
    numWriters: 0,
  };
  componentDidMount() {
    this.interval = setInterval(async () => {
      this.setState(({ events }) => ({
        events: [eventsFixtures[Math.floor(Math.random() * eventsFixtures.length)], ...events.slice(0, events.length - 1)]
      }));
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { events, numWriters } = this.state;
    return (
      <Feed>
        <Feed.Event style={{height: '20px'}}>{numWriters > 0 && <Feed.Summary>{numWriters} New Messages</Feed.Summary>}</Feed.Event>
        {events}
      </Feed>
    )
  }
}
