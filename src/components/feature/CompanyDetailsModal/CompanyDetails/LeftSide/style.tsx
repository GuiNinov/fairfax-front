import styled from 'styled-components';
import DesignSystem from '../../../../../config/DesignSystem.json';

export const Container = styled.div`
  padding-left: 25px;
  p {
    color: ${DesignSystem.color.black.text};
  }
  font-weight: 500;
`;

export const File = styled.div`
  box-shadow: 0px 2px 2px 0px #0000000f;
  padding: 20px 25px;
  border-radius: 16px;
  margin-bottom: 5px;
  p {
    margin: 0;
  }
  label {
    color: #85898e;
  }
  img {
    margin-right: 10px;
  }
`;
export const HeaderSpan = styled.span`
  font-weight: 600;
  border-radius: 6px;
  padding: 5px 24px;
  cursor: pointer;
  &.phase {
    color: ${DesignSystem.color.pink.span};
    background-color: ${DesignSystem.color.pink.light};
    border: 2px solid ${DesignSystem.color.pink.span};
  }
  &.score {
    color: ${DesignSystem.color.yellow.primary};
    background-color: ${DesignSystem.color.yellow.light};
    border: 2px solid ${DesignSystem.color.yellow.primary};
  }
`;
