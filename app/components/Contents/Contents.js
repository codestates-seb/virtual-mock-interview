import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: white;
`;

const ContentsBoxWrap = styled.div`
  padding: 20px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterviewrName = styled.div`
  font-size: 1rem;
`;

const ContentsPeople = styled.div`
  margin: 20px 20px;
  border-radius: 4px;
  width: 670px;
  min-width: 670px;
  height: 480px;
  background-color: white;
  box-shadow: 3px 3px 1px 0 rgba(128, 128, 128, 0.5);
`;
const ButtonIcon = styled.button`
  margin-left: 10px;
  width: 12px;
  height: 12px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
`;

export default function Contents() {
  return (
    <ContentsWrap>
      <ContentsBoxWrap>
        <ContentsWrapper>
          <InterviewrName>김정훈</InterviewrName>
          <ContentsPeople>
            <ButtonIcon />
            <ButtonIcon />
            <ButtonIcon />
          </ContentsPeople>
        </ContentsWrapper>

        <ContentsPeople>
          <InterviewrName>면접관</InterviewrName>
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
        </ContentsPeople>
      </ContentsBoxWrap>
    </ContentsWrap>
  );
}
