import { useSelector } from 'react-redux';

import { selectCountItems, selectItems, selectTotalCost } from '../../redux/cartSlice';

const useCart = () => {
  const items = useSelector(selectItems);
  const totalItems = useSelector(selectCountItems);
  const totalCost = useSelector(selectTotalCost);
  const shipping = 50;
  const VAT = totalCost * 0.20;
  const grandTotal = totalCost + shipping + VAT;

  return {
    items,
    totalItems,
    totalCost,
    shipping,
    VAT,
    grandTotal,
  };
};

export default useCart;
