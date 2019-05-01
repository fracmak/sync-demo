import React, { cloneElement } from 'react';
import { Feed, Transition } from 'semantic-ui-react'
import eventsFixtures from './events';

let id = 5;

export default class ScrollingFeed extends React.Component {
  state = {
    events: eventsFixtures,
    numWriters: 0,
  };
  componentDidMount() {
    this.interval = setInterval(async () => {
      let newEvent = cloneElement(eventsFixtures[Math.floor(Math.random() * eventsFixtures.length)], { key: `event${id++}` });
      this.setState(({ events }) => ({
        events: [newEvent, ...events.slice(0, events.length - 1)]
      }));
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { events, numWriters } = this.state;
    return (
      <Transition.Group as={Feed} duration={500}>
        <Feed.Event style={{height: '20px'}}>{numWriters > 0 && <Feed.Summary>{numWriters} New Messages</Feed.Summary>}</Feed.Event>
        {events}
      </Transition.Group>
    )
  }
}
