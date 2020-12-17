import React, { useContext } from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import { OrderContext } from './OrderContext';

export default function PizzaOrder({ pizzas, removeFromOrder }) {
  const orderContext = useContext(OrderContext);
  return (
    <>
      {orderContext.order.map((singleOrder, index) => {
        const pizza = pizzas.find(
          (singlePizza) => singlePizza.id === singleOrder.id
        );

        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {singleOrder.size} -{' '}
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${pizza.name} from order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
