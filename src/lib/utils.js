export const navList = [
  { text: 'home', href: '/' },
  { text: 'headphones', href: '/category/headphones' },
  { text: 'speakers', href: '/category/speakers' },
  { text: 'earphones', href: '/category/earphones' },
];

export const breakpoints = {
  // Should match /src/scss/abstracts/_breakpoints.scss
  sm: '24.9375em', // 399 / 16
  md: '44.5625em', // 713 / 16
  lg: '70.875em', // 1134 / 16
};

export const currency = ({ number }) => {
  const n = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
  const [dollars, cents] = n.split('.');
  return cents === '00' ? dollars : n;
};

export const isClient = typeof window !== 'undefined';

export const pluralize = ({ text, number }) => `${text}${number !== 1 ? 's' : ''}`;
