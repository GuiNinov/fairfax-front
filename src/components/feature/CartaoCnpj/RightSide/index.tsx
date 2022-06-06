import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../utils/Button';
import { Col } from '../../../utils/Col';
import { Row } from '../../../utils/Row';
import { ResultInput, ResultLabel } from '../styled';
import { actions } from '../../../../state';
export default function RightSide() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  const dispatch: any = useDispatch();
  return (
    <div
      style={{ padding: 25, width: '100%', overflowY: 'scroll', height: 525 }}
    >
      <h2>Resultado</h2>
      {company && company.cartao_cnpj && company.cartao_cnpj.form_data && (
        <>
          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Número de inscrição</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['NÚMERO DE INSCRIÇÃO']}
              />
            </Col>
            <Col>
              <ResultLabel>Data de abertura</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['DATA DE ABERTURA']}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Nome empresarial</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['NOME EMPRESARIAL']}
              />
            </Col>
            <Col>
              <ResultLabel>
                Título do estabelecimento (Nome fantasia)
              </ResultLabel>
              <ResultInput
                value={
                  company.cartao_cnpj.form_data[
                    'TÍTULO DO ESTABELECIMENTO (NOME DE FANTASIA)'
                  ]
                }
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Porte</ResultLabel>
              <ResultInput value={company.cartao_cnpj.form_data['PORTE']} />
            </Col>
            <Col>
              <ResultLabel>
                Código e descrição da atividade econômica
              </ResultLabel>
              <ResultInput
                value={
                  company.cartao_cnpj.form_data[
                    'CÓDIGO E DESCRIÇÃO DA ATIVIDADE ECONÔMICA PRINCIPAL'
                  ]
                }
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Código e descrição da Natureza Jurídica</ResultLabel>
              <ResultInput
                value={
                  company.cartao_cnpj.form_data[
                    'CÓDIGO E DESCRIÇÃO DA NATUREZA JURÍDICA'
                  ]
                }
              />
            </Col>
            <Col>
              <ResultLabel>Logradouro</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['LOGRADOURO']}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Número</ResultLabel>
              <ResultInput value={company.cartao_cnpj.form_data['NÚMERO']} />
            </Col>
            <Col>
              <ResultLabel>Complemento</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['COMPLEMENTO']}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Município</ResultLabel>
              <ResultInput value={company.cartao_cnpj.form_data['MUNICÍPIO']} />
            </Col>
            <Col>
              <ResultLabel>UF</ResultLabel>
              <ResultInput value={company.cartao_cnpj.form_data['UF']} />
            </Col>
          </Row>

          <Row style={{ marginBottom: 15 }} className="space-between">
            <Col>
              <ResultLabel>Endereço eletrônico</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['ENDEREÇO ELETRÔNICO']}
              />
            </Col>
            <Col>
              <ResultLabel>Situação cadastral</ResultLabel>
              <ResultInput
                value={company.cartao_cnpj.form_data['SITUAÇÃO CADASTRAL']}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Button
              onClick={() => dispatch(actions.page.closeCartaoCnpj())}
              className="primary"
            >
              SALVAR DADOS
            </Button>
          </Row>
        </>
      )}
    </div>
  );
}
