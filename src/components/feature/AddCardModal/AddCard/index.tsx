import React, { useState } from 'react';
import { Row } from '../../../utils/Row';
import { Container, FormArea } from './style';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../state';
import { Button } from '../../../utils/Button';
import { postRequest } from '../../../../config/apiRequest';

export default function AddCard() {
  const dispatch: any = useDispatch();

  const [cnpj, setCNPJ] = useState('');
  const [ins, setIns] = useState('Seguro frota');
  const [priority, setPriority] = useState('high');

  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);

    if (!cnpj || !ins || !priority) {
      setDisabled(false);
      alert('Preencha todos os campos antes de adicionar um empresa');
      return;
    }
    const data = {
      cnpj,
      insurance: ins,
      priority,
    };

    const req = await postRequest('/company', data);
    if (req.status == 400) {
      alert(`Erro ao cadastrar a empresa, tente novamente`);
      setDisabled(false);
      return;
    }

    if (req.status == 500) {
      alert(`O Servidor está fora do ar. Tente novamente mais tarde`);
      setDisabled(false);
      return;
    }

    alert('Empresa adicionada com sucesso!');
    window.location.reload();
    setDisabled(false);
  };

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
      <p>Para adicionar uma empresa, é necessário cadastrar um CNPJ real!</p>
      <FormArea>
        <label>CNPJ</label>
        <br />
        <InputMask
          placeholder="Escreva aqui o CNPJ da empresa"
          mask={'99.999.999/9999-99'}
          value={cnpj}
          onChange={(e) => setCNPJ(e.target.value)}
          disabled={disabled}
        />
        <br />
        <br />
        <label>Qual seguro a ser contratado?</label>
        <br />
        <select
          value={ins}
          onChange={(e) => setIns(e.target.value)}
          disabled={disabled}
          placeholder={'Selecione o tipo de seguro'}
        >
          <option value={'Seguro frota'}>Seguro frota</option>
          <option value={'Transporte de carga'}>Transporte de carga</option>
          <option value={'Resposabilidade civil'}>Resposabilidade civil</option>
          <option value={'Empresarial'}>Empresarial</option>
          <option value={'Vida em grupo'}>Vida em grupo</option>
          <option value={'Seguro gartantia'}>Seguro gartantia</option>
          <option value={'Seguro risco de engenharia'}>
            Seguro risco de engenharia
          </option>
        </select>
        <br />
        <br />
        <label>Qual o nível de prioridade desse cliente?</label>
        <br />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          disabled={disabled}
          placeholder={'Selecione o nível de prioridade'}
        >
          <option value={'high'}>Alta</option>
          <option value={'medium'}>Média</option>
          <option value={'low'}>Baixa</option>
        </select>
        <br />
        <br />
        <Row style={{ justifyContent: 'flex-end' }}>
          {disabled ? (
            <p>Cadastrando e buscando dados...</p>
          ) : (
            <Button className="primary" onClick={() => handleClick()}>
              ADICIONAR
            </Button>
          )}
        </Row>
      </FormArea>
    </Container>
  );
}
