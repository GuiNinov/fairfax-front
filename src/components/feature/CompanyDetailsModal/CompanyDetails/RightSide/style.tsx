import styled from 'styled-components';
import DesignSystem from '../../../../../config/DesignSystem.json';

export const FormData = styled.div`
  margin-top: 32px;

  p {
    margin: 0;
    padding: 0;
    font-weight: 500;
    color: ${DesignSystem.color.black.text};

    &.title {
      font-size: 18px;
    }

    &.alert {
      font-weight: 600;
      color: ${DesignSystem.color.red.alert};
    }
  }
  div.label-area {
    margin-top: 16px;
    label {
      color: ${DesignSystem.color.gray.medium};
      span {
        color: ${DesignSystem.color.black.text};
        font-weight: 500;
      }
    }
    ul {
      margin-top: 0px;
    }
    ul li {
      margin-bottom: 5px;
    }
  }

  div.align-top {
    margin-bottom: 15px;
  }
`;
