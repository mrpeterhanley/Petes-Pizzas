import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';
import stripes from '../assets/images/stripes.svg';
import SEO from './SEO';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 10rem auto 4rem auto;
  background: white url(${stripes});
  background-size: 1200px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 800px) {
    margin-top: 6rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
