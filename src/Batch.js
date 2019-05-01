import React from 'react';
import { Grid, Feed, Button } from 'semantic-ui-react'
import { Latch } from 'synchronization';

export default class Batch extends React.Component {
  state = {
    entries: [],
  };

  componentDidMount() {
    this.running = true;
    this.start();
  }
  componentWillUnmount() {
    this.running = false;
  }
  async start() {
    while (this.running) {
      this._latch = new Latch(3);
      await this._latch.wait();
      this.setState(({ entries }) => ({
        entries: entries.concat(true),
      }));
    }
  }
  track = () => {
    this._latch.countdown();
  };
  render() {
    const { entries } = this.state;
    return (
      <Grid centered>
        <Grid.Row>
          <Button onClick={this.track}>Event</Button>
        </Grid.Row>
        <Grid.Row>
          <Feed events={entries.map(entry => ({
            icon: 'check',
          }))} />
        </Grid.Row>
      </Grid>
    );

  }
}
