import cx from 'clsx';

import {
  AppBar,
  BestAudioGear,
  Button,
  CardNav,
  Container,
  Footer,
  NewProduct,
} from '..';
import styles from './IndexPage.module.scss';

const IndexPage = () => (
  <>
    <AppBar isSeparated wrapperClassName={cx(styles.appBarWrapper)} />
    <main>
      <h1 className={cx('sr-only')}>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <Container
        className={cx(styles.xx99MarkIIHeadphone)}
        component="article"
        wrapperClassName={styles.xx99MarkIIHeadphoneWrapper}
        wrapperComponent="div"
      >
        <NewProduct />
        <h2 className={cx('type-1')}>XX99 Mark II Headphone</h2>
        <p className={cx('type-body')}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button href="/product/xx99-mark-ii-headphones" variant="1">
          See Product
        </Button>
      </Container>
      <Container
        wrapperClassName={styles.contentWrapper}
        wrapperComponent="div"
      >
        <CardNav className={cx(styles.cardNav)} />
        <article className={cx(styles.zx9Speaker)}>
          <div>
            <h2 className={cx('type-1')}>zx9 speaker</h2>
            <p className={cx('type-body')}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Button href="/product/zx9-speaker" variant="3">see product</Button>
          </div>
        </article>
        <article className={cx(styles.zx7Speaker)}>
          <div>
            <h2 className={cx('type-4')}>zx7 speaker</h2>
            <Button href="/product/zx7-speaker" variant="2">see product</Button>
          </div>
        </article>
        <article className={cx(styles.yx1Earphones)}>
          <div className={cx(styles.yx1EarphonesImage)} />
          <div className={cx(styles.yx1EarphonesContent)}>
            <div>
              <h2 className={cx('type-4')}>yx1 earphones</h2>
              <Button href="/product/yx1-wireless-earphones" variant="2">see product</Button>
            </div>
          </div>
        </article>
      </Container>
    </main>
    <BestAudioGear />
    <Footer />
  </>
);

export default IndexPage;
