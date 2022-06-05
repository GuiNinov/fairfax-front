import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate, handlePhase } from '../../../../../helpers/formatDate';
import { Row } from '../../../../utils/Row';
import {
  Container,
  MiddleHeader,
  HeaderSpan,
  MiddleContent,
  FileArea,
} from './style';

export default function Middle() {
  const company: any = useSelector((state: any) => state.page.selected_company);

  return (
    <Container>
      <MiddleHeader>
        <Row className="space-between">
          <p>
            Fase atual:{' '}
            <HeaderSpan className="phase">
              {handlePhase(Number(company.phase))}
            </HeaderSpan>
          </p>
          <p>
            Score de aprovação:{' '}
            <HeaderSpan className="score">20/100</HeaderSpan>
          </p>
        </Row>
      </MiddleHeader>
      <MiddleContent>
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
            <img src={__dirname + './solicitar-dados.svg'} />
            <p style={{ color: '#496CEA' }}>Solicitar Dados</p>
          </Row>
        </Row>

        <Row className="align-top">
          <img src={__dirname + './line-3.svg'} />
          <div
            style={{
              width: '100%',
              paddingBottom: 10,
            }}
          >
            <Row className="space-between">
              <Row>
                <img src={__dirname + './check-off.svg'} />
                <p>Cartão CNPJ</p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
            <div
              style={{
                borderBottom: '2px solid #D9DBDF',
                width: '100%',
                paddingBottom: 10,
              }}
            >
              <FileArea>
                <p style={{ fontSize: 18 }}>Envio de documento</p>
                <input type={'file'} />
              </FileArea>
            </div>
            <div
              style={{
                borderBottom: '2px solid #D9DBDF',
                width: '100%',
                paddingBottom: 10,
              }}
            >
              <Row className="space-between">
                <Row>
                  <img src={__dirname + './green-check.svg'} />
                  <p>Governança</p>
                </Row>
                <img src={__dirname + './girl.svg'} />
              </Row>
            </div>
            <div
              style={{
                borderBottom: '2px solid #D9DBDF',
                width: '100%',
                paddingBottom: 10,
              }}
            >
              <Row className="space-between">
                <Row>
                  <img src={__dirname + './check-off.svg'} />
                  <p>Projeto de engenharia</p>
                </Row>
                <img src={__dirname + './girl.svg'} />
              </Row>
            </div>
          </div>
        </Row>
      </MiddleContent>
    </Container>
  );
}
