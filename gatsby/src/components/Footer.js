import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  color: grey;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Made with &hearts; in Melbourne, Australia by Peter Hanley</p>
    </FooterStyles>
  );
}
