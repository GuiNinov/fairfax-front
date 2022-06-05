import React from 'react';
import { Row } from '../../../utils/Row';
import { Container, FormArea } from './style';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../state';
import { Button } from '../../../utils/Button';

export default function AddCard() {
  const dispatch: any = useDispatch();
  return (
    <Container>
      <Row className="space-between">
        <h2>Adicionar nova empresa</h2>
        <img
          src={__dirname + './close-btn.svg'}
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(actions.page.closeAddCard())}
        />
      </Row>
      <FormArea>
        <label>CNPJ</label>
        <br />
        <InputMask
          placeholder="Escreva aqui o CNPJ da empresa"
          mask={'99.999.999/9999-99'}
        />
        <br />
        <br />
        <label>Seguro a ser contratado</label>
        <br />
        <select>
          <option>Transporte de carga</option>
          <option>Transporte de carga</option>
          <option>Transporte de carga</option>
          <option>Transporte de carga</option>
          <option>Transporte de carga</option>
        </select>
        <br />
        <br />
        <Row style={{ justifyContent: 'flex-end' }}>
          <Button className="primary">ADICIONAR</Button>
        </Row>
      </FormArea>
    </Container>
  );
}
