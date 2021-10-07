import Head from 'next/head';
import PropTypes from 'prop-types';

import { IndexPage } from '../components';

export const getStaticProps = async () => ({
  props: {
    appName: process.env.NEXT_PUBLIC_APP_NAME,
  },
});

const Index = ({ appName }) => (
  <>
    <Head>
      <title>{appName}</title>
      <meta name="description" content="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories." />
    </Head>
    <IndexPage />
  </>
);

Index.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Index;
