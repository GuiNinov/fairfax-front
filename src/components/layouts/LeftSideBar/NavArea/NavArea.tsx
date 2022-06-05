import React from 'react';
import { Container } from './styles';
import { Row } from '../../../utils/Row';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../../../state';

export default function NavArea() {
  const screen = useSelector((state: any) => state.page.screen);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row
        className={`NavLink ${screen == 0 && 'selected'}`}
        onClick={() => {
          navigate('/');
          dispatch(actions.page.changeScreen(0));
        }}
      >
        <img style={{ marginRight: 10 }} src={__dirname + './building.svg'} />
        <p>Empresas interessadas</p>
      </Row>
      <Row
        className={`NavLink ${screen == 1 && 'selected'}`}
        onClick={() => {
          navigate('/dash');
          dispatch(actions.page.changeScreen(1));
        }}
      >
        <img
          style={{ marginRight: 10 }}
          src={__dirname + './dashboard-icon.svg'}
        />
        <p>Dashboard</p>
      </Row>
      <Row
        className={`NavLink ${screen == 2 && 'selected'}`}
        onClick={() => {
          navigate('/score');
          dispatch(actions.page.changeScreen(2));
        }}
      >
        <img style={{ marginRight: 10 }} src={__dirname + './score-icon.svg'} />
        <p>Score de aprovação</p>
      </Row>
    </Container>
  );
}
