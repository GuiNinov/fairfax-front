import styled from 'styled-components';

export const ModalArea = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 16px;
  position: absolute;
  height: 575px;
  width: 95%;
  @media only screen and (min-width: 1400px) {
    height: 575px;
  }
  @media only screen and (min-width: 1500px) {
    height: 675px;
  }
  @media only screen and (min-width: 1600px) {
    height: 675px;
  }
  @media only screen and (min-width: 1700px) {
    height: 775px;
  }
`;

export const PdfView = styled.div`
  iframe {
    height: 400px;
    width: 450px;
  }
`;

export const ResultLabel = styled.p`
  margin: 0;
  color: #666666;
  padding-left: 20px;
  margin-bottom: 7.5px;
`;
export const ResultInput = styled.input`
  width: 305px;
  padding: 12px 20px;
  border: 2px solid #cacaca;
  font-size: 18px;
  color: #999999;
  border-radius: 4px;
  font-family: 'Inter';
  outline: none;
`;
