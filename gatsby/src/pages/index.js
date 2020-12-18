import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  p {
    text-align: center;
  }
`;

export default function HomePage() {
  return (
    <Layout>
      <IndexStyles>
        <h1>🍕 🍕 The Best Tasting Pizzas You'll Never Eat! 🍕 🍕</h1>
        <p>Open 11am to 11pm Every Single Day</p>
      </IndexStyles>
    </Layout>
  );
}
