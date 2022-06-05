import React from 'react';
import Card from '../../../utils/ClientCard';
import { Col } from '../../../utils/Col';
import { Row } from '../../../utils/Row';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../state';
export default function AnalisarDados() {
  const dispatch: any = useDispatch();
  return (
    <Col>
      <Row className="space-between">
        <p>ANALISAR DADOS (2)</p>
        <img
          src={__dirname + './add-icon.svg'}
          onClick={() => {
            dispatch(actions.page.openAddCard());
          }}
        />
      </Row>
      <Card
        company={{
          id: 2,
          name: 'CLIENTE X DA FAIR FAX',
          date: '25/Fev',
          priority: 'high',
        }}
      />
    </Col>
  );
}
