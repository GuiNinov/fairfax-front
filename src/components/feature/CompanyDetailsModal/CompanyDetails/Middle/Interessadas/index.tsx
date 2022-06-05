import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../../../helpers/formatDate';
import { Col } from '../../../../../utils/Col';
import { Row } from '../../../../../utils/Row';
import { EmailCard } from './styled';

export default function Interessadas() {
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
      <Row>
        <img src={__dirname + './Group 21.svg'} />
        <Col>
          <EmailCard>
            <Row className="space-between">
              <Row>
                <img src={__dirname + './email-icon.svg'} />
                <p className="title">
                  Assunto: Olá Fair Fax, Tenho interesse no seguro garantia de
                  vocês! Podemos...
                </p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
            <p>
              9:25AM (5 dias atrás) · From: Pedro Santos | To: Akira Tsukamoto
            </p>
            <p>
              Olá Fair Fax, Tenho interesse no seguro garantia de vocês! Podemos
              conversar essa semana? A Fair Fax foi recomendação de um amigo meu
              lá do Emirados Árabe recomendou o serviço de vocês... Ver mais
            </p>
          </EmailCard>
          <EmailCard>
            <Row className="space-between">
              <Row>
                <img src={__dirname + './email-icon.svg'} />
                <p className="title">Re: Claro! Podemos marcar sim</p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
            <p>
              10:25AM (2 dias atrás) · From: Akira Tsukamoto | To: Pedro Santos
            </p>
            <p>
              Olá Pedro, tudo bem por ai? Claro, vamos marcar sim! Temos vários
              cliente so Emirado Árabe :) ... Ver mais
            </p>
          </EmailCard>
          <EmailCard>
            <Row className="space-between">
              <Row>
                <img src={__dirname + './email-icon.svg'} />
                <p className="title">
                  Ótima conversa hoje! Fico no aguardo dos próximos passos...
                </p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
            <p>
              9:25AM (5 dias atrás) · From: Pedro Santos | To: Akira Tsukamoto
            </p>
            <p>
              Obrigado pelo papo de hoje, Akira! Fico no aguardo dos próximos
              passos... Ver mais
            </p>
          </EmailCard>
        </Col>
      </Row>
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Solicitar dados</p>
        </Row>
      </Row>
      <img src={__dirname + './line-2.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Analisar dados</p>
        </Row>
      </Row>
      <img src={__dirname + './line-2.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Enviar cotações</p>
        </Row>
      </Row>
    </div>
  );
}
