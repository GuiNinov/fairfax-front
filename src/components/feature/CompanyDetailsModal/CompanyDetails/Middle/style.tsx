import styled from 'styled-components';
import DesignSystem from '../../../../../config/DesignSystem.json';
export const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  border-right: 1.5px solid #d2dfec;
`;
export const MiddleHeader = styled.div`
  border-bottom: 1px solid #d2dfec;
  padding-bottom: 20px;
  p {
    color: ${DesignSystem.color.gray.indicator};
  }
`;

export const MiddleContent = styled.div`
  margin-top: 20px;
  img {
    margin-right: 10px;
  }
  p {
    font-weight: 500;
  }
`;

export const HeaderSpan = styled.span`
  font-weight: 600;
  border-radius: 6px;
  padding: 5px 8px;

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

export const FileArea = styled.div`
  background-color: #f8f8f8;
  border: 1px dashed #454545;
  border-radius: 8px;
  padding: 10px;
  p {
    margin-top: 0;
  }

  input::-webkit-file-upload-button {
    font-family: ${DesignSystem.fonts.primary};
    padding: 14px 50px;
    border-radius: 10px;
    font-weight: 600;
    background-color: transparent;
    border: 2px solid ${DesignSystem.color.blue.primary};
    color: ${DesignSystem.color.blue.primary};
    margin-right: 15px;
    cursor: pointer;
  }
  input {
    width: 100%;
    font-family: ${DesignSystem.fonts.primary};

    &.mail-file {
      width: 60%;
    }
  }
`;
