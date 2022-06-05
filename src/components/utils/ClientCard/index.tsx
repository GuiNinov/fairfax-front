import styled from 'styled-components';
import React from 'react';
import { Span } from '../Span';
import { Row } from '../Row';
import DesignSystem from '../../../config/DesignSystem.json';
import iCompany from '../../../interfaces/Company';
import { useDispatch } from 'react-redux';
import { actions } from '../../../state';
import { formatDate } from '../../../helpers/formatDate';

export default function Card(props: { company: any }) {
  const dispatch: any = useDispatch();

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
    props.company &&
    props.company.basic_data && (
      <CardArea
        onClick={() => {
          dispatch(actions.page.selectCompany(props.company));
          dispatch(actions.page.openCompanyDetails());
        }}
      >
        <Span className={props.company.priority ? props.company.priority : ''}>
          {props.company.priority && renderSpanText(props.company.priority)}
        </Span>
        <h4>
          {props.company.basic_data.conteudo.nome_fantasia
            ? props.company.basic_data.conteudo.nome_fantasia
            : props.company.basic_data.conteudo.nome_receita}
        </h4>
        <br />
        <Row>
          <img src={__dirname + './calendar-gray.svg'} />
          <label>{formatDate(props.company.created_at)}</label>
        </Row>
        <Row style={{ marginTop: 5 }} className="space-between">
          <img src={__dirname + './people.svg'} />
          <Row>
            <img src={__dirname + './clips.svg'} />
            <label>3</label>
          </Row>
        </Row>
      </CardArea>
    )
  );
}

export const CardArea = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #00000026;
  margin-bottom: 25px;
  height: 190px;
  cursor: pointer;
  label {
    color: ${DesignSystem.color.gray.label};
  }
`;
