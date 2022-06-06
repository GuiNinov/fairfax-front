import React from 'react';
import { Container } from './styles';
import { Row } from '../../utils/Row';
import { Button } from '../../utils/Button';
import { useSelector } from 'react-redux';
import iUser from '../../../interfaces/User';
export default function ScoreHeader() {
  const user: iUser = useSelector((state: any) => state.user.data);

  return (
    <Container>
      <Row className="space-between">
        <div>
          <label>Configuração</label>
          <h2>Score de aprovação</h2>
          <img src={__dirname + './select.svg'} />
        </div>
        <div>
          <Row>
            <img style={{ marginRight: 10 }} src={__dirname + user.photo} />
            {user.name}
          </Row>
        </div>
      </Row>
    </Container>
  );
}
