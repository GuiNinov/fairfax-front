import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../../state';
import { Row } from '../../../utils/Row';
import { PdfView } from '../styled';

export default function LeftSide() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  const dispatch: any = useDispatch();

  console.log(company);

  return (
    <div style={{ padding: 25 }}>
      <Row>
        <img
          style={{ marginRight: 20, cursor: 'pointer' }}
          src={__dirname + './back.svg'}
          onClick={() => dispatch(actions.page.closeCartaoCnpj())}
        />
        <h2>Informações Básicas</h2>
      </Row>
      <p style={{ fontWeight: 500 }}>Vizualização do documento</p>
      <PdfView>
        {company && company.cartao_cnpj && company.cartao_cnpj.file && (
          <iframe src={company.cartao_cnpj.file} />
        )}
      </PdfView>
    </div>
  );
}
