import React from 'react';
import { useSelector } from 'react-redux';
import iCompany from '../../../../../interfaces/Company';
import iUser from '../../../../../interfaces/User';
import { Col } from '../../../../utils/Col';
import { Row } from '../../../../utils/Row';
import { Span } from '../../../../utils/Span';
import { FormData } from './style';

export default function RightSide() {
  const company: iCompany = useSelector(
    (state: any) => state.page.selected_company
  );
  const user: iUser = useSelector((state: any) => state.user.data);

  const renderSpanText = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'ALTA';
      case 'medium':
        return 'MÉDIA';
      case 'low':
        return 'BAIXA';
    }
  };
  return (
    <div>
      <h2>{company.name}</h2>

      <Row>
        <img src={__dirname + './people.svg'} style={{ marginRight: 15 }} />
        <Span className={company.priority}>
          {renderSpanText(company.priority)}
        </Span>
      </Row>

      <p style={{ fontWeight: 600, marginBottom: 0 }}>Formulário inicial</p>
      <p style={{ fontSize: 14, marginTop: 5 }}>Criado por {user.name}</p>

      <FormData>
        <Row className="align-top">
          <Col>
            <img src={__dirname + './info.svg'} />
          </Col>
          <Col style={{ marginLeft: 15 }}>
            <p className="title">Seguro solicitado</p>
            <div className="label-area">
              <label>Seguro garantia para construção imobiliária</label>
            </div>
          </Col>
        </Row>

        <Row className="align-top">
          <Col>
            <img src={__dirname + './info.svg'} />
          </Col>
          <Col style={{ marginLeft: 15 }}>
            <p className="title">Informações básicas</p>
            <div className="label-area">
              <label>
                CNPJ: <span>46.997.418/0018-00</span>
              </label>
              <br />
              <label>
                Nome Fantasia: <span>{company.name}</span>
              </label>
              <br />
              <label>
                Situação cadastral: <span>Ativa</span>
              </label>
              <br />
              <label>
                Regime tributário: <span>LTDA</span>
              </label>
            </div>
          </Col>
        </Row>

        <Row className="align-top">
          <Col>
            <img src={__dirname + './etiqueta.svg'} />
          </Col>
          <Col style={{ marginLeft: 15 }}>
            <p className="title">Áreas de atuação</p>
            <div className="label-area">
              <ul>
                <li>
                  [PRINCIPAL] DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE
                  COMPUTADOR NAO CUSTOMIZAVEIS;
                </li>
                <li>
                  TRATAMENTO DE DADOS, PROVEDORES DE SERVICOS DE APLICACAO E
                  SERVICOS DE HOSPEDAGEM NA INTERNET;
                </li>
                <li>CONSULTORIA EM TECNOLOGIA DA INFORMACAO;</li>
              </ul>
              <label style={{ cursor: 'pointer' }}>Clique para ver mais</label>
            </div>
          </Col>
        </Row>

        <Row className="align-top">
          <Col>
            <img src={__dirname + './group-icon.svg'} />
          </Col>
          <Col style={{ marginLeft: 15 }}>
            <p className="title">Processos dos sócios</p>
            <div className="label-area">
              <p className="alert">1 processo criminal em nome dos sócios</p>
              <br />
              <label style={{ cursor: 'pointer' }}>
                Clique para ver todos os sócios e informações{' '}
              </label>
            </div>
          </Col>
        </Row>

        <Row className="align-top">
          <Col>
            <img src={__dirname + './cifra.svg'} />
          </Col>
          <Col style={{ marginLeft: 15 }}>
            <p className="title">Financeiro</p>
            <div className="label-area">
              <label>
                Capital Social: <span>R$ 49.027.001,00</span>
              </label>
              <br />
              <label>
                Score de crédito: <span>87/100</span>
              </label>
              <br />
              <label>
                Faturamento Anual: <span>R$ 670.027.001,00</span>
              </label>
            </div>
          </Col>
        </Row>
      </FormData>
    </div>
  );
}
