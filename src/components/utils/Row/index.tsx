import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &.space-between {
    justify-content: space-between;
  }
  &.align-top {
    align-items: flex-start;
  }
  &.end {
    justify-content: flex-end;
  }
`;
