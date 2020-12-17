import React from 'react';
import { OrderProvider } from './src/components/OrderContext';

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}
