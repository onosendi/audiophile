import Head from 'next/head';
import PropTypes from 'prop-types';

import { CategoryPage } from '../../components';

export const getStaticPaths = async () => {
  const knex = require('../../lib/db');

  const categories = await knex('category').select('slug');

  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const knex = require('../../lib/db');

  const category = await knex('category')
    .select('id', 'name')
    .where({ slug: params.slug })
    .first();

  const products = await knex('product as p')
    .select(
      'p.name',
      'p.new',
      'p.shortDescription',
      'p.slug',
      'pi.mobile',
      'pi.desktop',
    )
    .join('productImage as pi', 'pi.productId', '=', 'p.id')
    .where({ categoryId: category.id })
    .orderBy('order');

  return {
    props: {
      appName: process.env.NEXT_PUBLIC_APP_NAME,
      categoryName: category.name,
      products,
    },
  };
};

const Category = ({ appName, categoryName, products }) => (
  <>
    <Head>
      <title>
        {categoryName}
        {' | '}
        {appName}
      </title>
      <meta name="description" content="Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories." />
    </Head>
    <CategoryPage categoryName={categoryName} products={products} />
  </>
);

Category.propTypes = {
  appName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Category;
