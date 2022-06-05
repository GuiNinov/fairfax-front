import React from 'react';
import styled from 'styled-components';

export default function Modal({
  content,
  visible,
}: {
  content: any;
  visible: boolean;
}) {
  return (
    <ModalArea style={{ display: visible ? 'flex' : 'none' }}>
      <ModalContent>{content}</ModalContent>
    </ModalArea>
  );
}

export const ModalArea = styled.div`
  position: fixed;
  z-index: 100;
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
