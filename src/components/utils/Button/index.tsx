import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const Button = styled.button`
  font-family: ${DesignSystem.fonts.primary};
  padding: 14px 12px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  &.primary {
    border: none;
    background-color: ${DesignSystem.color.blue.primary};
    color: #fff;
  }

  &.soft {
    border: none;
    background-color: ${DesignSystem.color.blue.icon};
    color: #fff;
  }

  &.disabled {
    border: none;
    background-color: ${DesignSystem.color.gray.semi_ligth};
    color: #fff;
  }
`;
