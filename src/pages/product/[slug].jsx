import Head from 'next/head';
import PropTypes from 'prop-types';

import { ProductPage } from '../../components';

export const getStaticPaths = async () => {
  const knex = require('../../lib/db');

  const products = await knex('product').select('slug');

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const knex = require('../../lib/db');

  const product = await knex('product as p')
    .select(
      'p.name',
      'p.shortName',
      'p.shortDescription',
      'p.longDescription',
      'p.price',
      'p.new',
      'p.slug',
      'pi.mobile',
      'pi.tablet',
      'pi.desktop',
      'g.gallery',
      'b.box',
    )
    .leftJoin(
      knex('productGallery as g0')
        .select('productId', knex.raw('json_agg(g0) as gallery'))
        .groupBy('productId')
        .as('g'),
      'g.productId',
      '=',
      'p.id',
    )
    .leftJoin(
      knex('productBox as b0')
        .select('productId', knex.raw('json_agg(b0) as box'))
        .groupBy('productId')
        .as('b'),
      'b.productId',
      '=',
      'p.id',
    )
    .leftJoin('productImage as pi', 'pi.productId', '=', 'p.id')
    .where({ slug: params.slug })
    .first();

  const recommendedProducts = await knex('product as p')
    .select(
      'p.id',
      'p.name',
      'p.shortName',
      'p.slug',
      'pi.mobile',
    )
    .leftJoin('productImage as pi', 'pi.productId', '=', 'p.id');

  return {
    props: {
      appName: process.env.NEXT_PUBLIC_APP_NAME,
      product,
      recommendedProducts,
    },
  };
};

const Product = ({ appName, product, recommendedProducts }) => (
  <>
    <Head>
      <title>
        {product.name}
        {' | '}
        {appName}
      </title>
      <meta name="description" content={product.shortDescription} />
    </Head>
    <ProductPage product={product} recommendedProducts={recommendedProducts} />
  </>
);

Product.propTypes = {
  appName: PropTypes.string.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
  recommendedProducts: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};

export default Product;
