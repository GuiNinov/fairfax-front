import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from '../../utils/Row';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { ModalArea, ModalContent } from './styled';
export default function CartaoCnpj() {
  const status: any = useSelector((state: any) => state.page.cartao_cnpj);
  return (
    <ModalArea style={{ display: status ? 'flex' : 'none' }}>
      <ModalContent>
        <Row className="align-top">
          <LeftSide />
          <RightSide />
        </Row>
      </ModalContent>
    </ModalArea>
  );
}
