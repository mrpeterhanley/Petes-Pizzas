import { useContext } from 'react';
import { OrderContext } from '../components/OrderContext';

export default function usePizza() {
  const orderContext = useContext(OrderContext);

  function addToOrder(orderedPizza) {
    orderContext.setOrder([...orderContext.order, orderedPizza]);
  }

  function removeFromOrder(index) {
    orderContext.setOrder([
      ...orderContext.order.slice(0, index),
      ...orderContext.order.slice(index + 1),
    ]);
  }

  return {
    addToOrder,
    removeFromOrder,
  };
}
