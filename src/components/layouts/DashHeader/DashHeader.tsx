import React from 'react';
import { Container, RightSide, LeftSide } from './styles';
import { Row } from '../../utils/Row';
import { Button } from '../../utils/Button';
import { useSelector } from 'react-redux';
import iUser from '../../../interfaces/User';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state';
export default function DashHeader() {
  const user: iUser = useSelector((state: any) => state.user.data);
  const dispatch: any = useDispatch();

  return (
    <Container>
      <Row className="space-between">
        <div>
          <label>Analytics</label>
          <h2>Dashboard</h2>
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
