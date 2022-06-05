import React from 'react';
import { Row } from '../../../../utils/Row';
import { Container, HeaderSpan, File } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../../state';
import { handleNextPhase } from '../../../../../helpers/formatDate';
import { putRequest } from '../../../../../config/apiRequest';
export default function LeftSide() {
  const dispatch: any = useDispatch();
  const company: any = useSelector((state: any) => state.page.selected_company);

  const moveToPhase = async () => {
    const req = await putRequest('/company/' + company.id, {
      data: { phase: Number(company.phase) + 1 },
    });
    alert('Card movido com sucesso!');
    window.location.reload();
  };

  return (
    <Container>
      <Row className="end">
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(actions.page.closeCompanyDetails())}
          src={__dirname + './close-btn.svg'}
        />
      </Row>
      <p style={{ marginTop: 0 }}>Clique para mover para a fase:</p>
      <HeaderSpan className="phase" onClick={() => moveToPhase()}>
        {handleNextPhase(Number(company.phase))}
      </HeaderSpan>
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
