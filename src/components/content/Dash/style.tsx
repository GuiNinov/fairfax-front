import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const Container = styled.div`
  padding: 20px 40px;
`;
export const Nav = styled.div`
  a {
    text-decoration: none;
    margin-right: 35px;
    cursor: pointer;
    color: ${DesignSystem.color.black.text};
    font-weight: 500;
    padding-bottom: 5px;
    &.selected {
      border-bottom: 2px solid ${DesignSystem.color.blue.primary};
    }
  }
`;

export const ChartArea = styled.div`
  width: 50%;
`;
