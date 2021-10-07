import arrayShuffle from 'array-shuffle';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import {
  AddToCart,
  AppBar,
  BestAudioGear,
  Button,
  CardNav,
  Container,
  Footer,
  GoBack,
  NewProduct,
  ProductImage,
} from '..';
import { breakpoints, currency } from '../../lib/utils';
import styles from './ProductPage.module.scss';

const ProductPage = ({ product, recommendedProducts }) => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffledProducts = arrayShuffle(recommendedProducts);
    const filteredAndSliced = shuffledProducts.filter((item) => (
      item.slug !== product.slug)).slice(0, 3);
    setRandomProducts(filteredAndSliced);
  }, [recommendedProducts]);

  return (
    <>
      <AppBar isSeparated={false} wrapperClassName={cx(styles.appBarWrapper)} />
      <GoBack wrapperClassName={cx(styles.goBack)} />
      <Container wrapperClassName={cx(styles.containerWrapper)} wrapperComponent="div">
        <main>
          <div className={cx(styles.info)}>
            <ProductImage
              className={cx(styles.infoImageWrapper)}
              desktop={product.desktop}
              href={`/product/${product.slug}`}
              mobile={product.mobile}
              name={product.name}
              tablet={product.tablet}
            />
            <div className={cx(styles.infoContent)}>
              {!!product.new && <NewProduct />}
              <h1 className={cx('type-4')}>{product.name}</h1>
              <p className={cx('type-body')}>{product.shortDescription}</p>
              <span className={cx('type-6')}>{currency({ number: product.price })}</span>
              <AddToCart product={product} />
            </div>
          </div>
          <div className={cx(styles.featuresAndInTheBoxWrapper)}>
            <div className={cx(styles.features)}>
              <h2 className={cx('type-5')}>features</h2>
              <p className={cx('type-body')}>{product.longDescription}</p>
            </div>
            <div className={cx(styles.inTheBox)}>
              <h2 className={cx('type-5')}>in the box</h2>
              <ul className={cx('type-body')}>
                {product.box.map((item) => (
                  <li key={item.item}>
                    <span>{item.quantity}</span>
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cx(styles.gallery)}>
            {product.gallery.map((image) => (
              <picture key={image.order}>
                <source srcSet={image.desktop} media={`(min-width: ${breakpoints.lg})`} />
                <source srcSet={image.tablet} media={`(min-width: ${breakpoints.md})`} />
                <img src={image.mobile} alt={image.description} />
              </picture>
            ))}
          </div>
        </main>
        <aside className={cx(styles.recommended)}>
          <span className={cx('type-5', styles.recommendedHeader)}>you may also like</span>
          <ul className={cx(styles.recommendedList)}>
            {randomProducts.map((rec) => {
              const href = `/product/${rec.slug}`;

              return (
                <li key={rec.id}>
                  <ProductImage
                    className={cx(styles.recommendedListImage)}
                    href={href}
                    mobile={rec.mobile}
                    name={rec.name}
                  />
                  <span className={cx('type-5')}>{rec.shortName}</span>
                  <Button href={href} variant="1">see product</Button>
                </li>
              );
            })}
          </ul>
        </aside>
        <CardNav className={cx(styles.cardNav)} />
      </Container>
      <BestAudioGear />
      <Footer />
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    box: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    desktop: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
        tablet: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    longDescription: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    shortDescription: PropTypes.string.isRequired,
    shortName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
  }).isRequired,
  recommendedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      mobile: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ProductPage;
