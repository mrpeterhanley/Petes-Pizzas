import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  color: grey;

  p {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    p {
      font-size: 1.3rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Made with &hearts; in Melbourne, Australia by Peter Hanley</p>
    </FooterStyles>
  );
}
