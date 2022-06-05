import React from 'react';
import AnalisarDados from '../../feature/Home/AnalisarDados/AnalisarDados';
import EnviarProposta from '../../feature/Home/EnviarProposta/EnviarProposta';
import Interessadas from '../../feature/Home/Interessadas/Interessadas';
import SolicitarDados from '../../feature/Home/SolicitarDados/SolicitarDados';
import { Row } from '../../utils/Row';
import { Container, Content, Section } from './style';

export default function HomeContent() {
  return (
    <Container>
      <Content>
        <Row className="align-top">
          <Section>
            <Interessadas />
          </Section>
          <Section>
            <SolicitarDados />
          </Section>
          <Section>
            <AnalisarDados />
          </Section>
          <Section>
            <EnviarProposta />
          </Section>
        </Row>
      </Content>
    </Container>
  );
}
