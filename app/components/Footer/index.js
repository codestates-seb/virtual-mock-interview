import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #4d5166;
  text-align: center;
  line-height: 60px;
  color: white;
`;

function Footer() {
  return <FooterWrapper>면접 진행중입니다...</FooterWrapper>;
}

export default Footer;
