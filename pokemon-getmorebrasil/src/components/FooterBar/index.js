import React from 'react';
import { FooterContainer, FooterText } from './styles';

const FooterBar = () => {
    const date = new Date().getFullYear();

    return ( 
        <FooterContainer>
            <FooterText> © Milton Rodrigues - {date} </FooterText>
        </FooterContainer>
    );
  };

  export default FooterBar;