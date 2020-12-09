import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout';

const SlicemasterStyles = styled.div`
  .description {
    text-align: center;
    margin-top: 2rem;
  }

  .gatsby-image-wrapper {
    max-height: 500px;
  }
`;

export default function SingleSlicemasterPage({ data }) {
  const slicemaster = data.sanityPerson;

  return (
    <Layout>
      <SlicemasterStyles>
        <Img fluid={slicemaster.image.asset.fluid} />
        <div className="description">
          <h2 className="mark">{slicemaster.name}</h2>
          <p>{slicemaster.description}</p>
        </div>
      </SlicemasterStyles>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
    }
  }
`;
