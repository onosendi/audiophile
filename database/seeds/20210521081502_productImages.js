exports.seed = async (knex) => {
  await knex('productImage').del();
  const products = await knex('product');
  const getId = (slug) => products.find((product) => product.slug === slug).id;

  return knex('productImage').insert([
    {
      mobile: '/media/products/xx59-headphones/mobile/xx59-headphones.jpg',
      tablet: '/media/products/xx59-headphones/tablet/xx59-headphones.jpg',
      desktop: '/media/products/xx59-headphones/desktop/xx59-headphones.jpg',
      productId: getId('xx59-headphones'),
    },
    {
      mobile: '/media/products/xx99-mark-ii-headphones/mobile/xx99-mark-ii-headphones.jpg',
      tablet: '/media/products/xx99-mark-ii-headphones/tablet/xx99-mark-ii-headphones.jpg',
      desktop: '/media/products/xx99-mark-ii-headphones/desktop/xx99-mark-ii-headphones.jpg',
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      mobile: '/media/products/xx99-mark-i-headphones/mobile/xx99-mark-i-headphones.jpg',
      tablet: '/media/products/xx99-mark-i-headphones/tablet/xx99-mark-i-headphones.jpg',
      desktop: '/media/products/xx99-mark-i-headphones/desktop/xx99-mark-i-headphones.jpg',
      productId: getId('xx99-mark-i-headphones'),
    },
    {
      mobile: '/media/products/yx1-wireless-earphones/mobile/yx1-wireless-earphones.jpg',
      tablet: '/media/products/yx1-wireless-earphones/tablet/yx1-wireless-earphones.jpg',
      desktop: '/media/products/yx1-wireless-earphones/desktop/yx1-wireless-earphones.jpg',
      productId: getId('yx1-wireless-earphones'),
    },
    {
      mobile: '/media/products/zx7-speaker/mobile/zx7-speaker.jpg',
      tablet: '/media/products/zx7-speaker/tablet/zx7-speaker.jpg',
      desktop: '/media/products/zx7-speaker/desktop/zx7-speaker.jpg',
      productId: getId('zx7-speaker'),
    },
    {
      mobile: '/media/products/zx9-speaker/mobile/zx9-speaker.jpg',
      tablet: '/media/products/zx9-speaker/tablet/zx9-speaker.jpg',
      desktop: '/media/products/zx9-speaker/desktop/zx9-speaker.jpg',
      productId: getId('zx9-speaker'),
    },
  ]);
};
