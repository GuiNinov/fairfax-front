import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const RightSide = styled.div`
  label {
    color: ${DesignSystem.color.gray.label};
  }
  h2 {
    margin: 12px 0px;
    padding: 0;
    color: ${DesignSystem.color.black.text};
  }
  input {
    outline: none;
    border: 1px solid ${DesignSystem.color.gray.semi_medium};
    padding: 14px 18px;
    font-family: ${DesignSystem.fonts.primary};
    width: 400px;
    border-radius: 10px;
  }
  .lupa {
    margin-left: -40px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  padding: 50px 32px 50px 32px;
  border-bottom: 1.5px solid #d2dfec;
`;
