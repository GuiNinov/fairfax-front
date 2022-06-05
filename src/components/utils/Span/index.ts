import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const Span = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  padding: 5px 14px;
  width: fit-content;
  border-radius: 120px;
  &.high {
    background-color: ${DesignSystem.color.pink.span};
  }
  &.medium {
    background-color: ${DesignSystem.color.blue.span};
  }
  &.low {
    background-color: ${DesignSystem.color.green.span};
  }
`;
