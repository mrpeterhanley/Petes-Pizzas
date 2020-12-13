import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const WineGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
`;

const WineStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

export default function WinesPage({ data }) {
  return (
    <Layout>
      <SEO title={`Wines! We have ${data.wines.nodes.length} in stock.`} />
      <h2 className="center">
        We have {data.wines.nodes.length} wines available. Dine in only.
      </h2>
      <WineGridStyles>
        {data.wines.nodes.map((wine) => (
          <WineStyles key={wine.id}>
            <img src={wine.image} alt={wine.name} />
            <h3>{wine.wine}</h3>
            {wine.winery} - {wine.location}
          </WineStyles>
        ))}
      </WineGridStyles>
    </Layout>
  );
}

export const query = graphql`
  query WineQuery {
    wines: allWine {
      nodes {
        id
        wine
        winery
        location
        image
      }
    }
  }
`;
