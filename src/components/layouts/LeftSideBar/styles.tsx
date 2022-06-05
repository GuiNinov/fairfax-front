import styled from 'styled-components';
import DesignSystem from '../../../config/DesignSystem.json';

export const Container = styled.div`
  width: fit-content;
  border-right: 2px solid ${DesignSystem.color.gray.transitions};
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 10%;

  div.img-header {
    padding: 65px 15px 65px 17px;
    border-bottom: 2px solid ${DesignSystem.color.gray.transitions};
  }
`;
