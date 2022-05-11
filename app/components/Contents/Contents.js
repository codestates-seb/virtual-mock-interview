import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ContentsBoxWrap = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InterviewrName = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const ContentsPeople = styled.div`
  margin: 20px 20px 20px 20px;
  border-radius: 4px;
  width: 674px;
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
        <ContentsWrapper>
          <InterviewrName>면접관</InterviewrName>
          <ContentsPeople>
            <ButtonIcon />
            <ButtonIcon />
            <ButtonIcon />
          </ContentsPeople>
        </ContentsWrapper>
      </ContentsBoxWrap>
    </ContentsWrap>
  );
}
