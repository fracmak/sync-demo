import React, { cloneElement } from 'react';
import { Feed, Button, Transition } from 'semantic-ui-react'
import { ReadWriteBarrier } from 'synchronization';
import eventsFixtures from './events';

let id = 5;
const animationDuration = 500;

export default class ScrollingFeed extends React.Component {
  state = {
    events: eventsFixtures,
    numWriters: 0,
    modal: false,
  };
  barrier = new ReadWriteBarrier();
  componentDidMount() {
    this.interval = setInterval(async () => {
      this.setState(({ numWriters }) => ({ numWriters: numWriters + 1 }));
      await this.barrier.write();
      this.barrier.read();
      let newEvent = cloneElement(eventsFixtures[Math.floor(Math.random() * eventsFixtures.length)], { key: `event${id++}` });
      this.setState(({ numWriters, events }) => ({
        numWriters: numWriters - 1,
        events: [newEvent, ...events.slice(0, events.length - 1)]
      }));
      setTimeout(() => this.barrier.releaseRead(), animationDuration);
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  readLock = () => {
    this.barrier.read();
  };

  releaseLock = () => {
    this.barrier.releaseRead();
  };

  toggle = () => {
    this.setState(({ stopped } ) => {
      if (stopped) {
        this.barrier.releaseRead();
      } else {
        this.barrier.read();
      }
      return {
        stopped: !stopped,
      };
    });
  };

  closeModal = () => {
    this.barrier.releaseRead();
    this.setState({
      modal: false,
    });
  };

  render() {
    const { events, numWriters, stopped } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.toggle}>{ stopped ? 'START!' : 'STOP!' }</Button>
        <Transition.Group as={Feed} duration={animationDuration} onMouseEnter={this.readLock} onMouseLeave={this.releaseLock}>
          <Feed.Event>
            {numWriters > 0 && <Feed.Summary>{numWriters} New Messages</Feed.Summary>}
          </Feed.Event>
          {events}
        </Transition.Group>
      </React.Fragment>
    )
  }
}
