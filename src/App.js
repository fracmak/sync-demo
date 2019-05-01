import React from 'react';
import ScrollingFeed from './ScrollingFeed';
import ScrollingFeedLock from './ScrollingFeedLock';
import ScrollingFeedRWLock from './ScrollingFeedRWLock';
import Batch from './Batch';
import Upload from './Upload';
import { Segment, Button } from 'semantic-ui-react';
import './App.css';

class App extends React.Component {
  state = {
    mode: 'normal',
  };
  setMode = (mode) => {
    this.setState({ mode });
  };
  render() {
    const { mode } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          My Social App
        </header>
        <Segment>
          <Button onClick={() => this.setMode('normal')} active={mode === 'normal'}>Normal</Button>
          <Button onClick={() => this.setMode('simple')} active={mode === 'simple'}>Simple Lock</Button>
          <Button onClick={() => this.setMode('batch')} active={mode === 'batch'}>Batch</Button>
          <Button onClick={() => this.setMode('upload')} active={mode === 'upload'}>Upload</Button>
          <Button onClick={() => this.setMode('rw')} active={mode === 'rw'}>R/W Lock</Button>
        </Segment>
        {mode === 'normal' && <ScrollingFeed />}
        {mode === 'simple' && <ScrollingFeedLock />}
        {mode === 'batch' && <Batch />}
        {mode === 'upload' && <Upload />}
        {mode === 'rw' && <ScrollingFeedRWLock />}
      </div>
    );
  }
}

export default App;
