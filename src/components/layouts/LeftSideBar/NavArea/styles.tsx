import styled from 'styled-components';
import DesignSystem from '../../../../config/DesignSystem.json';

export const Container = styled.div`
  color: ${DesignSystem.color.black.text};
  font-weight: 500;
  padding: 65px 5px 65px 5px;
  min-width: 275px;
  div.NavLink {
    margin-bottom: 35px;
    cursor: pointer;
  }
  div.selected {
    font-weight: 600;
    background-color: ${DesignSystem.color.blue.light};
    padding: 14px 12px;
    border-radius: 16px;
  }
`;
