import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  width: 80%;
  margin-top: 50px;
  display: flex;
  color: white;
`;
const TitleName = styled.div`
  font-weight: bold;
  font-size: 50px;
  width: 180px;
`;

const SubTitle = styled.div`
  margin-top: 15px;
  flex-direction: column;
`;

const TitleSubject = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;
const TitleDate = styled.div``;

export default function Title() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let week = new Array('일', '월', '화', '수', '목', '금', '토');
  let hours = today.getHours();
  let minutes = today.getMinutes();

  return (
    <TitleWrap>
      <TitleName>COOM</TitleName>
      <SubTitle>
        <TitleSubject>기술면접</TitleSubject>
        <TitleDate>
          {week[today.getDay()]}, {month}/{day} 시간:{hours}:{minutes} - {hours}
          :{minutes + 30}
        </TitleDate>
      </SubTitle>
    </TitleWrap>
  );
}
