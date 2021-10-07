import Head from 'next/head';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import { PersistGate } from '../components';
import store, { persitor } from '../redux/store';
import '../scss/index.scss';

const Audiophile = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <Component {...pageProps} />
        <Toaster />
      </PersistGate>
    </Provider>
  </>
);

Audiophile.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default Audiophile;
