import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Carousel } from './carousel';
import { getDefaultTranslations, slides } from './fixtures';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <h1>Test App</h1>
        <Carousel
          getTranslations={getDefaultTranslations}
          slides={slides}
          title="Test Carousel"
        />
      </div>
    </>
  );
};

export default App;
