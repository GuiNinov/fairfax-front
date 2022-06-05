import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../../../helpers/formatDate';
import iCompany from '../../../../../interfaces/Company';
import iUser from '../../../../../interfaces/User';
import { Col } from '../../../../utils/Col';
import { Row } from '../../../../utils/Row';
import { Span } from '../../../../utils/Span';
import { FormData } from './style';

export default function RightSide() {
  const company: any = useSelector((state: any) => state.page.selected_company);
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
    company &&
    company.basic_data &&
    company.processos_qsa &&
    company.activity &&
    company.spc &&
    company.protesto && (
      <div>
        <h2>
          {company.basic_data.conteudo.nome_fantasia
            ? company.basic_data.conteudo.nome_fantasia
            : company.basic_data.conteudo.nome_receita}
        </h2>

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
                <label> {company.insurance}</label>
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
                  CNPJ: <span>{company.cnpj}</span>
                </label>
                <br />
                <label>
                  Nome Fantasia:{' '}
                  <span>
                    {company.basic_data.conteudo.nome_fantasia
                      ? company.basic_data.conteudo.nome_fantasia
                      : company.basic_data.conteudo.nome_receita}
                  </span>
                </label>
                <br />
                <label>
                  Situação cadastral:{' '}
                  <span>{company.basic_data.conteudo.situacao}</span>
                </label>
                <br />
                <label>
                  Regime tributário:{' '}
                  <span>{company.basic_data.conteudo.regime_tributario}</span>
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
                  {company.basic_data.conteudo.cnaes.map(
                    (cnae: any, k: number) => {
                      if (k <= 2) {
                        return (
                          <li>
                            {cnae['IsMain'] && '[PRINCIPAL]'} {cnae['Activity']}
                          </li>
                        );
                      }
                    }
                  )}
                </ul>
                <label style={{ cursor: 'pointer' }}>
                  Clique para ver mais
                </label>
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
                <p className={company.processos_qsa.approved ? '' : 'alert'}>
                  {company.processos_qsa.mensagem}
                </p>
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
                  Capital Social:{' '}
                  <span>
                    {formatPrice(company.basic_data.conteudo.capital_social)}
                  </span>
                </label>
                <br />
                <label>
                  Score de crédito:{' '}
                  <span>{company.spc.conteudo.score / 10} / 100</span>
                </label>
                <br />
                <label>
                  Faturamento Anual:{' '}
                  <span>{company.activity.conteudo.faturamento}</span>
                </label>
              </div>
            </Col>
          </Row>

          <Row className="align-top">
            <Col>
              <img src={__dirname + './cifra.svg'} />
            </Col>
            <Col style={{ marginLeft: 15 }}>
              <p className="title">Protestos em cartório</p>
              <div className="label-area">
                <p className={company.protesto.approved ? '' : 'alert'}>
                  {company.protesto.mensagem}
                </p>{' '}
                <br />
                <label style={{ cursor: 'pointer' }}>
                  Clique para ver todos os sócios e informações{' '}
                </label>
              </div>
            </Col>
          </Row>
        </FormData>
      </div>
    )
  );
}
