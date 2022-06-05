import React from 'react';
import { Row } from '../../../../utils/Row';
import { Container, HeaderSpan, File } from './style';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../../state';
export default function LeftSide() {
  const dispatch: any = useDispatch();
  return (
    <Container>
      <Row className="end">
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(actions.page.closeCompanyDetails())}
          src={__dirname + './close-btn.svg'}
        />
      </Row>
      <p>Mover para a fase</p>
      <HeaderSpan className="phase">Analisar dados</HeaderSpan>
      <br />
      <br />
      <hr />
      <p>Anexos</p>

      <File>
        <Row>
          <img src={__dirname + './pdf.svg'} />
          <div>
            <p>Cartão CNPJ.pdf</p>
            <label>1 MB</label>
          </div>
        </Row>
      </File>
      <File>
        <Row>
          <img src={__dirname + './pdf.svg'} />
          <div>
            <p>Projeto de eng.pdf</p>
            <label>3 MB</label>
          </div>
        </Row>
      </File>
      <File>
        <Row>
          <img src={__dirname + './excel.svg'} />
          <div>
            <p>Financeiro.csv</p>
            <label>3 MB</label>
          </div>
        </Row>
      </File>
      <File>
        <Row>
          <img src={__dirname + './word.svg'} />
          <div>
            <p>Governança.docx</p>
            <label>3 MB</label>
          </div>
        </Row>
      </File>
    </Container>
  );
}
