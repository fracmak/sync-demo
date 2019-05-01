import React, { cloneElement } from 'react';
import { Feed, Transition } from 'semantic-ui-react'
import { Lock } from 'synchronization';
import eventsFixtures from './events';

let id = 5;

export default class ScrollingFeed extends React.Component {
  state = {
    events: eventsFixtures,
    numWriters: 0,
  };
  _lock = new Lock();
  componentDidMount() {
    this.interval = setInterval(async () => {
      this.setState(({ numWriters }) => ({ numWriters: numWriters + 1 }));
      await this.lock();
      let newEvent = cloneElement(eventsFixtures[Math.floor(Math.random() * eventsFixtures.length)], { key: `event${id++}` });
      this.setState(({ numWriters, events }) => ({
        numWriters: numWriters - 1,
        events: [newEvent, ...events.slice(0, events.length - 1)]
      }));
      this.unlock();
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  lock = () => {
    return this._lock.lock();
  };

  unlock = () => {
    this._lock.unlock();
  };

  render() {
    const { events, numWriters } = this.state;
    return (
      <Transition.Group as={Feed} duration={500} onMouseEnter={this.lock} onMouseLeave={this.unlock}>
        <Feed.Event style={{height: '20px'}}>{numWriters > 0 && <Feed.Summary>{numWriters} New Messages</Feed.Summary>}</Feed.Event>
        {events}
      </Transition.Group>
    )
  }
}
