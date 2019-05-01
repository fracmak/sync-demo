import React from 'react';
import { Progress } from 'semantic-ui-react'
import { Semaphore } from 'synchronization';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];

function delay(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

export default class Upload extends React.Component {
  state = {
    uploads: Array.from(new Array(6)).map(() => ({ percent: 0, color: colors[Math.floor(Math.random() * colors.length)] })),
  };
  _semaphore = new Semaphore(2);

  componentDidMount() {
    const { uploads } = this.state;
    uploads.forEach(async (upload) => {
      await this._semaphore.acquire();
      this.uploadFile(upload);
    });
  }
  async uploadFile(upload) {
    while (upload.percent < 100) {
      upload.percent = upload.percent + 2;
      this.setState(({ uploads }) => ({ uploads }));
      await delay(Math.random() * 150);
    }
    this._semaphore.release();
  }
  render() {
    const { uploads } = this.state;
    return (
      <React.Fragment>
        { uploads.map(upload => (
          <Progress percent={upload.percent} color={upload.color} />
        ))}
      </React.Fragment>
    )
  }
}
