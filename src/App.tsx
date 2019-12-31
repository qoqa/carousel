import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Gallery } from './Gallery';
import { slides } from './fixtures';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container className="App">
        <h1>Galleries with Carousel</h1>
        <p>Click on one if the image below to open the carousel.</p>
        <Gallery slides={slides} title="My Gallery" />
        <Gallery slides={[slides[9]]} title="Gallery with one image" />
      </Container>
    </>
  );
};

export default App;
