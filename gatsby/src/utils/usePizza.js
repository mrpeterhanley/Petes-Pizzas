import { useContext, useState } from 'react';
import { OrderContext } from '../components/OrderContext';
import calculateOrderTotal from './calculateOrderTotal';
import attachNamesAndPrices from './attachNamesAndPrices';

export default function usePizza({ pizzas, values }) {
  const orderContext = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function addToOrder(orderedPizza) {
    orderContext.setOrder([...orderContext.order, orderedPizza]);
  }

  function removeFromOrder(index) {
    orderContext.setOrder([
      ...orderContext.order.slice(0, index),
      ...orderContext.order.slice(index + 1),
    ]);
  }

  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const body = {
      order: attachNamesAndPrices(orderContext.order, pizzas),
      total: calculateOrderTotal(orderContext.order, pizzas),
      name: values.name,
      email: values.email,
    };

    const res = fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success! Come on down for your pizza');
    }
  }

  return {
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
