import styled from 'styled-components';
import DesignSystem from '../../../../config/DesignSystem.json';
export const Container = styled.div`
  padding: 32px;
`;

export const RightSideArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  overflow-y: scroll;
  max-height: 525px;
  @media only screen and (min-width: 1400px) {
    max-height: 525px;
  }
  @media only screen and (min-width: 1500px) {
    height: 625px;
  }
  @media only screen and (min-width: 1600px) {
    height: 625px;
  }
  @media only screen and (min-width: 1700px) {
    height: 725px;
  }
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 120px;
  }

  &::-webkit-scrollbar-track {
    background: ${DesignSystem.color.gray.transitions};
    border-radius: 120px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${DesignSystem.color.blue.primary};
    border-radius: 120px;
  }
`;
export const MiddleSideArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  overflow-y: scroll;
  max-height: 525px;
  @media only screen and (min-width: 1400px) {
    max-height: 525px;
  }
  @media only screen and (min-width: 1500px) {
    height: 625px;
  }
  @media only screen and (min-width: 1600px) {
    height: 625px;
  }
  @media only screen and (min-width: 1700px) {
    height: 725px;
  }
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 120px;
  }

  &::-webkit-scrollbar-track {
    background: ${DesignSystem.color.gray.transitions};
    border-radius: 120px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${DesignSystem.color.blue.primary};
    border-radius: 120px;
  }
`;

export const LeftSideArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
`;
