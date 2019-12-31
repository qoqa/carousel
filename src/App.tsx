import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Gallery } from './Gallery';
import { slides } from './fixtures';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container className="App">
        <h1>Test App</h1>
        <Gallery slides={slides} title="My Gallery" />
        <Gallery slides={[slides[9]]} title="Gallery with one image" />
      </Container>
    </>
  );
};

export default App;
