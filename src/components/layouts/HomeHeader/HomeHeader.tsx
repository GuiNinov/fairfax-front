import React from 'react';
import { Container, RightSide, LeftSide } from './styles';
import { Row } from '../../utils/Row';
import { Button } from '../../utils/Button';
import { useSelector } from 'react-redux';
import iUser from '../../../interfaces/User';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state';
export default function HomeHeader() {
  const user: iUser = useSelector((state: any) => state.user.data);
  const dispatch: any = useDispatch();

  return (
    <Container>
      <Row className="space-between">
        <RightSide>
          <label>CRM B2B2C</label>
          <h2>Empresas interessadas</h2>
          <Row>
            <input type={'text'} placeholder={'Pesquisar...'} />
            <img className="lupa" src={__dirname + './lupa.svg'} />
          </Row>
        </RightSide>
        <LeftSide>
          <Row>
            <img style={{ marginRight: 10 }} src={__dirname + user.photo} />
            {user.name}
          </Row>
          <br />
          <Button
            className="primary"
            onClick={() => {
              dispatch(actions.page.openAddCard());
            }}
          >
            + ADD EMPRESA
          </Button>
        </LeftSide>
      </Row>
    </Container>
  );
}
