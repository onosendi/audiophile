import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem: () => Promise.resolve(null),
  setItem: (key, value) => Promise.resolve(value),
  removeItem: () => Promise.resolve(),
});

const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

export default storage;
