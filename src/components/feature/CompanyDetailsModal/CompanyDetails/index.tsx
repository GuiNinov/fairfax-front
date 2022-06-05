import React from 'react';
import { Row } from '../../../utils/Row';
import LeftSide from './LeftSide/LeftSide';
import Middle from './Middle/Middle';
import RightSide from './RightSide/RightSide';
import {
  Container,
  LeftSideArea,
  MiddleSideArea,
  RightSideArea,
} from './styles';
export default function CompanyDetails() {
  return (
    <Container>
      <Row className="align-top">
        <RightSideArea>
          <RightSide />
        </RightSideArea>
        <MiddleSideArea>
          <Middle />
        </MiddleSideArea>
        <LeftSideArea>
          <LeftSide />
        </LeftSideArea>
      </Row>
    </Container>
  );
}
