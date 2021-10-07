exports.seed = async (knex) => {
  await knex('productBox').del();
  const products = await knex('product');
  const getId = (slug) => products.find((product) => product.slug === slug).id;

  return knex('productBox').insert([
    {
      item: 'Headphone Unit',
      quantity: 1,
      order: 1,
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      item: 'Replacement Earcups',
      quantity: 2,
      order: 2,
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      item: '3.5mm 5m Audio Cable',
      quantity: 1,
      order: 4,
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      item: 'Travel Bag',
      quantity: 1,
      order: 5,
      productId: getId('xx99-mark-ii-headphones'),
    },
    {
      item: 'Headphone Unit',
      quantity: 1,
      order: 1,
      productId: getId('xx99-mark-i-headphones'),
    },
    {
      item: 'Replacement Earcups',
      quantity: 2,
      order: 2,
      productId: getId('xx99-mark-i-headphones'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('xx99-mark-i-headphones'),
    },
    {
      item: '3.5mm 5m Audio Cable',
      quantity: 1,
      order: 4,
      productId: getId('xx99-mark-i-headphones'),
    },
    {
      item: 'Headphone Unit',
      quantity: 1,
      order: 1,
      productId: getId('xx59-headphones'),
    },
    {
      item: 'Replacement Earcups',
      quantity: 2,
      order: 2,
      productId: getId('xx59-headphones'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('xx59-headphones'),
    },
    {
      item: '3.5mm 5m Audio Cable',
      quantity: 1,
      order: 4,
      productId: getId('xx59-headphones'),
    },
    {
      item: 'Speaker Unit',
      quantity: 2,
      order: 1,
      productId: getId('zx9-speaker'),
    },
    {
      item: 'Speaker Cloth Panel',
      quantity: 2,
      order: 2,
      productId: getId('zx9-speaker'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('zx9-speaker'),
    },
    {
      item: '3.5mm 10m Audio Cable',
      quantity: 1,
      order: 4,
      productId: getId('zx9-speaker'),
    },
    {
      item: '10m Optical Cable',
      quantity: 1,
      order: 5,
      productId: getId('zx9-speaker'),
    },
    {
      item: 'Speaker Unit',
      quantity: 2,
      order: 1,
      productId: getId('zx7-speaker'),
    },
    {
      item: 'Speaker Cloth Panel',
      quantity: 2,
      order: 2,
      productId: getId('zx7-speaker'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('zx7-speaker'),
    },
    {
      item: '3.5mm 7.5m Audio Cable',
      quantity: 1,
      order: 4,
      productId: getId('zx7-speaker'),
    },
    {
      item: '7.5m Optical Cable',
      quantity: 1,
      order: 5,
      productId: getId('zx7-speaker'),
    },
    {
      item: 'Earphone Unit',
      quantity: 2,
      order: 1,
      productId: getId('yx1-wireless-earphones'),
    },
    {
      item: 'Multi-size Earplugs',
      quantity: 6,
      order: 2,
      productId: getId('yx1-wireless-earphones'),
    },
    {
      item: 'User Manual',
      quantity: 1,
      order: 3,
      productId: getId('yx1-wireless-earphones'),
    },
    {
      item: 'USB-C Charging Cable',
      quantity: 1,
      order: 4,
      productId: getId('yx1-wireless-earphones'),
    },
    {
      item: 'Travel Pouch',
      quantity: 1,
      order: 5,
      productId: getId('yx1-wireless-earphones'),
    },
  ]);
};
