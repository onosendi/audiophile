import cx from 'clsx';
import PropTypes from 'prop-types';

import {
  AppBar,
  BestAudioGear,
  Button,
  CardNav,
  Container,
  Footer,
  NewProduct,
  ProductImage,
} from '..';
import styles from './CategoryPage.module.scss';

const CategoryPage = ({ categoryName, products }) => (
  <>
    <AppBar isSeparated wrapperClassName={cx(styles.appBarWrapper)} />
    <h1 className={cx(styles.pageHeader)}>{categoryName}</h1>
    <Container wrapperClassName={cx(styles.containerWrapper)} wrapperComponent="div">
      <main className={cx(styles.productWrapper)}>
        {products.map((product) => {
          const href = `/product/${product.slug}`;

          return (
            <article className={cx(styles.product)} key={product.slug}>
              <ProductImage
                className={cx(styles.productImageWrapper)}
                desktop={product.desktop}
                href={href}
                mobile={product.mobile}
                name={product.name}
              />
              <div className={cx(styles.productContentWrapper)}>
                {!!product.new && <NewProduct />}
                <h2 className={cx('type-4')}>{product.name}</h2>
                <p className={cx('type-body')}>{product.shortDescription}</p>
                <Button href={href} variant="1">
                  see product
                </Button>
              </div>
            </article>
          );
        })}
      </main>
      <CardNav className={cx(styles.cardNav)} />
    </Container>
    <BestAudioGear />
    <Footer />
  </>
);

CategoryPage.propTypes = {
  categoryName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      new: PropTypes.bool.isRequired,
      shortDescription: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CategoryPage;
