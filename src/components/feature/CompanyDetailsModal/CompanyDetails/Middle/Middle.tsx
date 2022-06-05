import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate, handlePhase } from '../../../../../helpers/formatDate';
import { Row } from '../../../../utils/Row';
import AnalisarDados from './AnalisarDados';
import Cotacoes from './Cotacoes';
import Interessadas from './Interessadas';
import SolicitarDados from './SolicitarDados';
import { Container, MiddleHeader, HeaderSpan, MiddleContent } from './style';

export default function Middle() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  const renderScreen = () => {
    switch (Number(company.phase)) {
      case 0:
        return <Interessadas />;
      case 1:
        return <SolicitarDados />;
      case 2:
        return <AnalisarDados />;
      case 3:
        return <Cotacoes />;
      default:
        return <></>;
    }
  };
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
      <MiddleContent>{renderScreen()}</MiddleContent>
    </Container>
  );
}
