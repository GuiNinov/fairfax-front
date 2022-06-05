import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const Container = styled.div`
  background-color: ${DesignSystem.color.gray.semi_ligth};
  max-width: 1000px;
  overflow-x: scroll;
  transform: rotate(180deg);
  &::-webkit-scrollbar {
    height: 12px;
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
  @media only screen and (min-width: 1400px) {
    max-width: 1100px;
  }
  @media only screen and (min-width: 1500px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
  }
  @media only screen and (min-width: 1700px) {
    max-width: 1300px;
  }
  @media only screen and (min-width: 1800px) {
    max-width: 1400px;
  }
  @media only screen and (min-width: 1900px) {
    max-width: 1500px;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1650px;
  }
  @media only screen and (min-width: 2100px) {
    max-width: 1700px;
  }
  @media only screen and (min-width: 2200px) {
    max-width: 1900px;
  }
  @media only screen and (min-width: 2300px) {
    max-width: 2200px;
  }
  @media only screen and (min-width: 2400px) {
    max-width: 2200px;
  }
`;

export const Content = styled.div`
  transform: rotate(180deg);
  padding: 40px;
  min-height: 1050px;
  width: fit-content;
`;

export const Section = styled.div`
  width: 275px;
  margin-right: 35px;

  img {
    cursor: pointer;
  }
`;
