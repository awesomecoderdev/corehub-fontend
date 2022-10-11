import React, { Fragment } from 'react';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
