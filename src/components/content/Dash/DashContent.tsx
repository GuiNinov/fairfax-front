import React, { useEffect, useState } from 'react';
import { Row } from '../../utils/Row';
import { Container, Nav, ChartArea } from './style';
import { FunnelChart } from 'react-funnel-pipeline';
import 'react-funnel-pipeline/dist/index.css';
import { Col } from '../../utils/Col';
import { getRequest } from '../../../config/apiRequest';
export default function DashContent() {
  const [interesse, setInteresse] = useState([]);
  const [solDados, setSolDados] = useState([]);
  const [analDados, setAnalDados] = useState([]);
  const [cot, setCot] = useState([]);

  const getCards = async () => {
    const req_int = await getRequest('/phase/0');
    setInteresse(req_int.content);
    const req_sol = await getRequest('/phase/1');
    setSolDados(req_sol.content);
    const req_anal = await getRequest('/phase/2');
    setAnalDados(req_anal.content);
    const req_cot = await getRequest('/phase/3');
    setCot(req_cot.content);
  };

  useEffect(() => {
    getCards();
  }, []);
  return (
    <Container>
      <Nav>
        <Row>
          <a href="#" className="selected">
            Resumo
          </a>
          <a href="#">Detalhes</a>
          <a href="#">Tabela</a>
        </Row>
      </Nav>

      <div
        style={{
          padding: 15,
          boxShadow: '3px 4px 4px 3px #e5e5e5',
          borderRadius: 16,
        }}
      >
        <h3>Funil de conversão</h3>
        <Row>
          <ChartArea>
            <FunnelChart
              showValues={false}
              heightRelativeToValue={true}
              chartHeight={75}
              data={[
                { name: 'Interessadas ', value: interesse.length },
                { name: 'Solicitar dados', value: solDados.length },
                { name: 'Analisar dados', value: analDados.length },
                { name: 'Cotações enviadas', value: cot.length },
              ]}
              pallette={['#A7BFF4', '#7C9EF2', '#507EEC', '#235EE7']}
              // pallette={}
            />
          </ChartArea>
          <Col style={{ marginLeft: 35 }}>
            <p>Interessadas {interesse && `(${interesse.length})`}</p>
            <p>Solicitar dados {solDados && `(${solDados.length})`}</p>
            <p>Analisar dados {analDados && `(${analDados.length})`}</p>
            <p>Cotações enviadas {cot && `(${cot.length})`}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
