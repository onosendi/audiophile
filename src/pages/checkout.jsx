import Head from 'next/head';
import PropTypes from 'prop-types';

import { CheckoutPage } from '../components';

export const getStaticProps = async () => ({
  props: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
  },
});

const Checkout = ({ appName }) => (
  <>
    <Head>
      <title>
        Checkout
        {' | '}
        {appName}
      </title>
      <meta name="description" content="Checkout" />
    </Head>
    <CheckoutPage />
  </>
);

Checkout.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Checkout;
