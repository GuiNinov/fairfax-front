import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../../../helpers/formatDate';
import { Row } from '../../../../../utils/Row';
import { HeaderSpan } from '../style';
import { ScoreCard } from './style';

export default function AnalisarDados() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  return (
    <div>
      <Row className="space-between">
        <Row>
          <img src={__dirname + './green-check.svg'} />
          <p>Início do contato</p>
        </Row>
        <p>{formatDate(company.created_at)}</p>
      </Row>
      <img src={__dirname + './line-1.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './mail.svg'} />
          <p style={{ color: '#496CEA' }}>10 e-mails ocultados</p>
        </Row>
        <img src={__dirname + './girl.svg'} />
      </Row>
      <img src={__dirname + './line-2.svg'} />

      <Row className="space-between">
        <Row>
          <img src={__dirname + './green-check.svg'} />
          <p>Solicitar Dados</p>
        </Row>
        <p>{'06/06/2022'}</p>
      </Row>
      <img src={__dirname + './line-1.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './mail.svg'} />
          <p style={{ color: '#496CEA' }}>4 arquivos anexados</p>
        </Row>
        <img src={__dirname + './girl.svg'} />
      </Row>
      <img src={__dirname + './line-2.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './solicitar-dados.svg'} />
          <p style={{ color: '#496CEA' }}>Analisar Dados</p>
        </Row>
        <p>{'07/06/2022'}</p>
      </Row>
      <Row>
        <img src={__dirname + './line-4.svg'} />
        <ScoreCard>
          <Row className="space-between">
            <Row>
              <img src={__dirname + './green-check.svg'} />
              <p>
                Score de aprovação:{' '}
                <HeaderSpan className="score">80/100</HeaderSpan>
              </p>
            </Row>
            <img src={__dirname + './girl.svg'} />
          </Row>
          <label>Clique aqui para ver mais informações</label>
        </ScoreCard>
      </Row>
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Enviar cotações</p>
        </Row>
      </Row>
    </div>
  );
}
